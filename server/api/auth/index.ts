import type { EventHandlerRequest, H3Event } from "h3";
import { withEventLogger, logger } from "~~/server/utils/log";
import { setCookieWrapper } from "~~/server/utils/session";
import type { UserLoginBody } from "~~/shared/types/user.schema";
import type { UserCheckBody, UserCheckRes, UserLoginRes } from "~~/shared/types/user.schema";

function getLog(event?: H3Event, meta: Record<string, unknown> = {}) {
  return event ? withEventLogger(event, meta) : logger.child(meta);
}

export async function checkAccount(cred: UserCheckBody, event?: H3Event) {
  const log = getLog(event, {
    scope: "auth:check-account",
    email: cred.email,
  });

  log.debug("Checking user account", {
    event: "check_account_request",
  });

  const check = mustOk(
    await apiFetch<UserCheckRes>("/user/check", {
      method: "POST",
      body: {
        ...cred,
      },
    }),
  );

  log.info("Account check result", {
    event: "check_account_result",
    registered: check.registered,
  });

  return check;
}

export async function signUser(cred: UserLoginBody, event?: H3Event) {
  const log = getLog(event, {
    scope: "auth:sign-user",
    provider: cred.provider,
    type: cred.type,
  });

  log.debug("Signing user", {
    event: "sign_user_request",
    provider: cred.provider,
    type: cred.type,
  });

  const res = mustOk(
    await apiFetch<UserLoginRes>("/sign", {
      method: "POST",
      body: {
        ...cred,
      },
    }),
  );

  log.info("User signed successfully", {
    event: "sign_user_success",
  });

  return res;
}

export function setCookieToken(event: H3Event<EventHandlerRequest>, token: string) {
  const log = withEventLogger(event, {
    scope: "auth:cookie",
  });

  setCookieWrapper(event, "user-token", token);

  log.debug("Auth cookie set", {
    event: "set_cookie",
    name: "user-token",
  });
}
