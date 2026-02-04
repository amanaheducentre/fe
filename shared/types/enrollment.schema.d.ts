import type { paths } from "./openapi";

export type EnrollmentCheckBodyRes =
  paths["/enrollment/{courseIdentifier}/check"]["get"]["responses"]["200"]["content"]["application/json"];
