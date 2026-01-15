import type { UserData } from "./user.schema";

declare module "#auth-utils" {
  interface User extends UserData {}
}

export {};
