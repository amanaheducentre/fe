import type { UserDataRes } from "~~/shared/types/user.schema";
import { z } from "zod";
import { apiFetch, mustOk } from "~~/server/utils/api";
import { signUser, setCookieToken } from ".";
import { withEventLogger } from "~~/server/utils/log";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, { scope: "auth:local-login" });

  log.info("Local login request received", { event: "login_request" });

  try {
    const { email, password } = await readValidatedBody(event, bodySchema.parse);

    log.debug("Login payload validated", { event: "login_validated", email });

    const res = await signUser({ type: "local", email, password }, event);

    log.info("User signed successfully", {
      event: "sign_user_success",
      email,
    });

    const user = mustOk(
      await apiFetch<UserDataRes>("/user/profile", {
        headers: { authorization: "Bearer " + res.token },
      }),
    );

    await setUserSession(event, { user });
    setCookieToken(event, res.token);

    log.info("Session initialized and cookie set", { event: "session_initialized", email });

    return res.token;
  } catch (err) {
    log.error("Local login failed", {
      event: "login_error",
      error: err instanceof Error ? err.message : err,
    });
    throw err;
  }
});
