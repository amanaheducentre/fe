import { withEventLogger } from "~~/server/utils/log";

export default defineEventHandler((event) => {
  const log = withEventLogger(event, { scope: "log-test" });

  log.info("Log test hit", { event: "log_test" });

  // eslint-disable-next-line no-console
  console.log("[log-test] console log hit");

  return { ok: true, traceId: event.context.traceId };
});
