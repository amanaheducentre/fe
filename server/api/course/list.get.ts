import { apiFetch, mustOk } from "~~/server/utils/api";
import { withEventLogger } from "~~/server/utils/log";
import type { ListCourseRes, ListTagsRes } from "~~/shared/types/course.schema";

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "course:list",
  });

  log.info("Course list request received", {
    event: "course_list_request",
  });

  try {
    log.debug("Fetching course list from API", {
      event: "course_list_fetch",
      method: "GET",
      endpoint: "/course/",
    });

    const courses = mustOk(
      await apiFetch<ListCourseRes>("/course/list", {
        method: "GET",
      }),
    ) as ListCourseRes["data"];

    log.info("Course list fetched successfully", {
      event: "course_list_success",
      count: Array.isArray(courses) ? courses.length : undefined,
    });

    const tags = mustOk(
      await apiFetch<ListTagsRes>("/course/tags?courseId=" + courses.items.map((item) => item.id), {
        method: "GET",
      }),
    ) as ListTagsRes["data"];

    const result = {
      ...courses,
      items: courses.items.map((item) => ({
        ...item,
        tags: tags.filter((tag) => tag.courseId === item.id).map((tag) => tag.tag),
      })),
    };

    return result;
  } catch (err) {
    log.error("Failed to fetch course list", {
      event: "course_list_error",
      error: err instanceof Error ? err.message : err,
    });

    throw err;
  }
});
