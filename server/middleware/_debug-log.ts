import { withEventLogger } from "~~/server/utils/log";

export default defineEventHandler((event) => {
  const log = withEventLogger(event, { scope: "http" });
  log.info("Incoming request", { event: "http_request" });
});
