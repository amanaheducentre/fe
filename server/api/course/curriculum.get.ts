import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import type { CourseCurriculumWithLectures } from "~~/shared/types/course.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:curriculum",
  });

  log.info("Course curriculum request received", {
    event: "course_curriculum_request",
  });

  try {
    const query = getQuery(event);
    const courseId = query["courseId"];
    const token = getCookie(event, "user-token");

    log.debug("Extracting query parameters", {
      event: "query_params_extracted",
      courseId,
      hasToken: !!token,
    });

    if (!courseId || !token) {
      log.error("Missing required parameters", {
        event: "course_curriculum_validation_error",
        hasCourseId: !!courseId,
        hasToken: !!token,
      });
      throw new Error("courseId/token needed");
    }

    log.debug("Fetching course curriculum from API", {
      event: "course_curriculum_fetch",
      method: "GET",
      endpoint: `/courses/${courseId}/curriculum`,
      courseId,
    });

    const curriculum = mustOk(
      await apiFetch<CourseCurriculumWithLectures>(`/courses/${courseId}/curriculum`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
    ) as CourseCurriculumWithLectures["data"];

    log.info("Course curriculum fetched successfully", {
      event: "course_curriculum_success",
      courseId,
    });

    return curriculum;
  } catch (err) {
    log.error("Failed to fetch course curriculum", {
      event: "course_curriculum_error",
      error: err instanceof Error ? err.message : err,
      stack: err instanceof Error ? err.stack : undefined,
    });

    throw err;
  }
});
