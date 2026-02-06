import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import type { EnrollmentPostBody } from "~~/shared/types/enrollment.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:detail",
  });

  try {
    const courseId = getRouterParam(event, "id");
    const token = getCookie(event, "user-token");

    const detail = mustOk(
      await apiFetch<EnrollmentPostRes>(`/enrollment/${courseId}`, {
        method: "POST",
        headers: {
          authorization: "Bearer " + token,
        },
        body: <EnrollmentPostBody>{
          source: "purchase",
        },
      }),
    ) as EnrollmentPostRes["data"];

    return detail;
  } catch (err) {
    throw err;
  }
});
