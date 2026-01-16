import { EventHandlerRequest, H3Event } from "h3";
import { setCookieWrapper } from "~~/server/utils/session";
import { UserLoginBody } from "~~/shared/types/user.schema";

export async function checkAccount(cred: UserCheckBody) {
  const check = mustOk(
    await apiFetch<UserCheckRes>("/user/check", {
      method: "POST",
      body: <UserCheckBody>{
        ...cred,
      },
    })
  );

  return check;
}

export async function signUser(cred: UserLoginBody) {
  const res = mustOk(
    await apiFetch<UserLoginRes>("/sign", {
      method: "POST",
      body: <UserLoginBody>{
        ...cred,
      },
    })
  );

  return res;
}

export function setCookieToken(event: H3Event<EventHandlerRequest>, token: string) {
  setCookieWrapper(event, "user-token", token);
}
