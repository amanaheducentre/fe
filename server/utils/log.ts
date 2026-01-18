// Generated with ChatGPT 5.2

import type { H3Event } from "h3";
import { mkdirSync } from "node:fs";
import path from "node:path";
import winston, { transports, type Logger } from "winston";

winston.addColors({
  error: "bold red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
});

type LogExtra = Record<string, unknown>;

/** Redaction helper: hapus/replace field sensitif agar aman di production logs */
function redact(value: unknown): unknown {
  const SENSITIVE_KEYS = new Set([
    "authorization",
    "cookie",
    "cookies",
    "set-cookie",
    "token",
    "access_token",
    "id_token",
    "refresh_token",
    "password",
    "secret",
    "x-sign",
    "x-api-key",
  ]);

  const MAX_DEPTH = 6;

  const walk = (v: any, depth: number): any => {
    if (depth > MAX_DEPTH) return "[Truncated]";
    if (v == null) return v;

    if (Array.isArray(v)) return v.map((x) => walk(x, depth + 1));

    if (typeof v === "object") {
      const out: Record<string, any> = {};
      for (const [k, val] of Object.entries(v)) {
        const key = k.toLowerCase();
        if (SENSITIVE_KEYS.has(key) || key.includes("token") || key.includes("password")) {
          out[k] = "[REDACTED]";
        } else {
          out[k] = walk(val, depth + 1);
        }
      }
      return out;
    }

    if (typeof v === "string" && v.length > 250) return "[REDACTED_LONG_STRING]";
    return v;
  };

  return walk(value, 0);
}

/** Format aman: pastikan info tetap object + ter-redact */
const safeJsonFormat = winston.format((info) => {
  // clone enumerable props
  const cloned: Record<string, unknown> = { ...(info as any) };

  // IMPORTANT: copy symbol props (Winston uses these internally)
  for (const sym of Object.getOwnPropertySymbols(info)) {
    (cloned as any)[sym] = (info as any)[sym];
  }

  const redacted = redact(cloned);

  // keep symbols again if redact returned a new object
  if (redacted && typeof redacted === "object") {
    for (const sym of Object.getOwnPropertySymbols(cloned)) {
      (redacted as any)[sym] = (cloned as any)[sym];
    }
    return redacted as any;
  }

  return info;
});

/** Level default */
const level =
  process.env.NUXT_LOG_LEVEL || process.env.LOG_LEVEL || (process.env.NODE_ENV === "production" ? "info" : "debug");

/** Console transport (selalu) */
const consoleTransport = new transports.Console({
  stderrLevels: ["error"],
});

/**
 * File transport (opsional).
 * Penting:
 * - Pastikan folder ada
 * - Pakai absolute path
 * - Hindari runtime read-only (serverless/edge)
 */
let fileTransport: transports.FileTransportInstance | null = null;

try {
  const logsDir = path.resolve(process.cwd(), "logs");
  mkdirSync(logsDir, { recursive: true });

  const logFilePath = path.resolve(logsDir, "combined.log");
  fileTransport = new transports.File({
    filename: logFilePath,
  });
} catch (e) {
  // Kalau gagal bikin directory/file transport, kita tetap lanjut (console tetap jalan)
  // dan kita paksa tampilkan sebabnya:
  // eslint-disable-next-line no-console
  console.error("[logger] Failed to init file transport:", e);
}

const devFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp({ format: "HH:mm:ss" }),
  winston.format.printf((info) => {
    const { timestamp, level, message, traceId, scope, ...meta } = info;

    const metaStr = Object.keys(meta).length > 0 ? ` ${JSON.stringify(meta)}` : "";

    return `${timestamp} ${level} ${message}${metaStr}`;
  }),
);

const prodFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  safeJsonFormat(),
  winston.format.json(),
);

const isProd = process.env.NODE_ENV === "production";
export const logger = winston.createLogger({
  level: process.env.NUXT_LOG_LEVEL || process.env.LOG_LEVEL || (isProd ? "info" : "debug"),
  silent: false,
  defaultMeta: {
    service: process.env.SERVICE_NAME || "nuxt-server",
    env: process.env.NODE_ENV || "development",
  },
  format: isProd ? prodFormat : devFormat,
  transports: [
    new winston.transports.Console({
      stderrLevels: ["error"],
    }),
  ],
});

if (!isProd) {
  logger.add(
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  );
}

// Biar kalau transport error, kamu pasti lihat
consoleTransport.on("error", (err) => {
  // eslint-disable-next-line no-console
  console.error("[logger] Console transport error:", err);
});
fileTransport?.on("error", (err) => {
  // eslint-disable-next-line no-console
  console.error("[logger] File transport error:", err);
});

// Smoke test: harus muncul saat server mulai (lihat terminal)
logger.info("Logger initialized", { event: "logger_initialized", level });

/** Ambil traceId dari middleware */
export function getTraceId(event?: H3Event) {
  return (event as any)?.context?.traceId as string | undefined;
}

/** Logger per-request */
export function withEventLogger(event: H3Event, meta: LogExtra = {}) {
  const traceId = getTraceId(event);
  const req = event.node.req;

  return logger.child({
    traceId,
    ...meta,
    req: {
      method: req.method,
      url: req.url,
    },
  });
}

/** Helper event logging */
export function logEvent(
  log: Logger,
  level: "debug" | "info" | "warn" | "error",
  message: string,
  data: LogExtra = {},
) {
  (log as any)[level](message, data);
}
