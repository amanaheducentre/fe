import type { paths } from "./openapi";

export type EnrollmentCheckBodyRes =
  paths["/enrollment/{courseIdentifier}/check"]["get"]["responses"]["200"]["content"]["application/json"];

export type EnrollmentPostBody =
  paths["/enrollment/{courseIdentifier}"]["post"]["requestBody"]["content"]["application/json"];
export type EnrollmentPostRes =
  paths["/enrollment/{courseIdentifier}"]["post"]["responses"]["200"]["content"]["application/json"];
