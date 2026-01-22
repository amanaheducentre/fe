import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import { LectureDataRes } from "~~/shared/types/lecture.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "lecture:detail",
  });

  log.info("Lecture detail request received", {
    event: "lecture_detail_request",
  });

  try {
    const query = getQuery(event);
    const lectureId = query["lectureId"];
    const token = getCookie(event, "user-token");

    log.debug("Fetching lecture detail from API", {
      event: "lecture_detail_fetch",
      method: "GET",
      endpoint: `/lectures/${lectureId}`,
      lectureId,
    });

    const detail = mustOk(
      await apiFetch<LectureDataRes>(`/lectures/${lectureId}`, {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      }),
    ) as LectureDataRes["data"];

    log.info("Lecture detail fetched successfully", {
      event: "lecture_detail_success",
      lectureId,
    });

    return detail;
  } catch (err) {
    throw err;
  }
});
