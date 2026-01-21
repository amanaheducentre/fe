import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import type { CourseDetailData } from "~~/shared/types/course.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:detail",
  });

  try {
    const courseId = getRouterParam(event, "id");

    const detail = mustOk(
      await apiFetch<CourseDetailData>(`/course/${courseId}`, {
        method: "GET",
      }),
    ) as CourseDetailData["data"];

    return detail;
  } catch (err) {
    throw err;
  }
});
