import type { paths } from "./openapi";

export type ListCourseRes = paths["/course/"]["get"]["responses"]["200"]["content"]["application/json"];
export type CourseData = ListCourseRes["data"]["items"][number];
