import { NitroFetchOptions, NitroFetchRequest } from "nitropack";
import { createError } from "h3";
import type { FetchError } from "ofetch";

type ApiErrItem = { message?: string };
type ApiRes<T> = {
  ok: boolean;
  status: number;
  data?: T;
  errors?: ApiErrItem[];
};

export async function apiFetch<T>(path: string, options: NitroFetchOptions<NitroFetchRequest>) {
  const res = await $fetch<T>(process.env.NUXT_API_BASE_URL! + path, options);

  return res as T;
}

function joinErrors(errors?: ApiErrItem[]) {
  const msg = errors
    ?.map((e) => e?.message)
    .filter(Boolean)
    .join("\n");
  return msg?.trim();
}

export function mustOk<T>(
  res: ApiRes<T>,
  opts?: {
    fallbackMessage?: string;
    status?: number;
  },
): T {
  if (res.ok) return res.data as T;

  const message = joinErrors(res.errors) || opts?.fallbackMessage || "Request failed";
  const status = opts?.status ?? res.status ?? 500;

  throw createError({ statusCode: status, message });
}

export function unwrapFetchError<T>(e: unknown): T | null {
  if (!e || typeof e !== "object") return null;

  const err = e as FetchError<any>;
  return err.data?.data ?? err.data ?? null;
}
