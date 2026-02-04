import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import type { EnrollmentCheckBodyRes } from "~~/shared/types/enrollment.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:detail",
  });

  try {
    const courseId = getRouterParam(event, "id");
    const token = getCookie(event, "user-token");

    const detail = mustOk(
      await apiFetch<EnrollmentCheckBodyRes>(`/enrollment/${courseId}/check`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      }),
    ) as EnrollmentCheckBodyRes["data"];

    return detail;
  } catch (err) {
    throw err;
  }
});
