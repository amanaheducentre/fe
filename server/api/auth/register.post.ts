import type { UserRegBody, UserRegRes } from "~~/shared/types/user.schema";
import { z } from "zod";
import { apiFetch, mustOk } from "~~/server/utils/api";
import { setCookieToken, signUser } from ".";
import { withEventLogger } from "~~/server/utils/log";

const bodySchema = z.object({
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, {
    scope: "auth:complete-registration",
  });

  log.info("Registration completion request received", {
    event: "reg_complete_request",
  });

  try {
    const { password } = await readValidatedBody(event, bodySchema.parse);
    const { user } = await requireUserSession(event);

    log.debug("Session user loaded", {
      event: "session_user_loaded",
      email: user.email,
    });

    log.debug("Registering user profile", {
      event: "user_register_request",
    });

    const payload: UserRegBody = {
      ...(user as any),
      password,
      status: "active",
    };

    const reg = mustOk(
      await apiFetch<UserRegRes>("/user/register", {
        method: "POST",
        body: payload,
      }),
    );

    log.info("User registered successfully", {
      event: "user_register_success",
      email: user.email,
      userId: (reg as any)?.userId,
    });

    log.debug("Signing user after registration", {
      event: "sign_user_request",
      type: "local",
      email: user.email,
    });

    const res = await signUser(
      {
        type: "local",
        email: user.email,
        password,
      },
      event,
    );

    log.info("User signed successfully after registration", {
      event: "sign_user_success",
      email: user.email,
    });

    await setUserSession(event, { reg });
    setCookieToken(event, res.token);

    log.info("Session initialized and cookie set", {
      event: "session_initialized",
      email: user.email,
    });

    return { ok: true };
  } catch (err) {
    log.error("Registration completion failed", {
      event: "reg_complete_error",
      error: err instanceof Error ? err.message : err,
    });
    throw err;
  }
});
