import { randomUUID } from "node:crypto";

function extractTraceId(event: any) {
  const xTraceId = getHeader(event, "x-trace-id");
  if (xTraceId && typeof xTraceId === "string" && xTraceId.length > 0) return xTraceId;

  const traceparent = getHeader(event, "traceparent");
  if (traceparent && typeof traceparent === "string" && traceparent.length > 0) return traceparent;

  return randomUUID();
}

export default defineEventHandler((event) => {
  const traceId = extractTraceId(event);

  event.context.traceId = traceId;

  setHeader(event, "x-trace-id", traceId);
});
