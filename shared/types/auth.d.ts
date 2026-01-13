import type { UserDataRes } from "./user.schema";

declare module "#auth-utils" {
  interface User extends UserDataRes {}
}

export {};
