import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import { LectureDataRes } from "~~/shared/types/lecture.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "lecture:detail",
  });

  try {
    const lectureId = getRouterParam(event, "id");
    const token = getCookie(event, "user-token");

    const detail = mustOk(
      await apiFetch<LectureDataRes>(`/lectures/${lectureId}`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      }),
    ) as LectureDataRes["data"];

    return detail;
  } catch (err) {
    throw err;
  }
});
