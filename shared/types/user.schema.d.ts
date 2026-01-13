import type { paths } from "./openapi";

export type UserLoginBody = paths["/sign"]["post"]["requestBody"]["content"]["application/json"];
export type UserLoginRes = paths["/sign"]["post"]["responses"]["200"]["content"]["application/json"];

export type UserDataHeader = paths["/user/profile"]["get"]["parameters"]["header"];
export type UserDataRes = paths["/user/profile"]["get"]["responses"]["200"]["content"]["application/json"];
