import type { paths } from "./openapi";

export type ListCourseRes = paths["/course/list"]["get"]["responses"]["200"]["content"]["application/json"];
export type CourseData = ListCourseRes["data"]["items"][number];

export type ListTagsQuery = paths["/course/tags"]["get"]["parameters"]["query"];
export type ListTagsRes = paths["/course/tags"]["get"]["responses"]["200"]["content"]["application/json"];
export type TagData = ListTagsRes["data"][number];
