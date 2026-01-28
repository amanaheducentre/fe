import { checkAccount, setCookieToken, signUser } from ".";
import { withEventLogger } from "~~/server/utils/log";

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    const log = withEventLogger(event, {
      scope: "auth:google",
      provider: "google",
      email: user.email,
    });

    // Save user state
    await setUserSession(event, { user });

    log.info("OAuth Google success callback received", {
      event: "oauth_success",
    });

    try {
      log.debug("Checking account registration status", {
        event: "check_account",
      });

      const check = await checkAccount({ email: user.email }, event);
      if (!check.registered) {
        log.warn("User not registered, redirecting to signup", {
          event: "redirect",
        });
        return sendRedirect(event, "/lms/signup");
      }

      log.info("Account check completed", {
        event: "check_account_result",
        registered: check.registered,
      });

      // Sign user
      log.debug("Signing user via SSO", {
        event: "sign_user",
        type: "sso",
        provider: "google",
      });

      const res = await signUser(
        {
          type: "sso",
          provider: "google",
          token: tokens.id_token,
        },
        event,
      );

      log.info("User signed successfully", {
        event: "sign_user_success",
        userId: user.sub,
      });

      setCookieToken(event, res.token);
      log.debug("Auth cookie set", {
        event: "session_initialized",
      });

      log.info("Redirecting user to dashboard", {
        event: "redirect",
      });
      return sendRedirect(event, "/lms");
    } catch (err) {
      log.error("OAuth Google flow failed", {
        event: "oauth_error",
        error: err instanceof Error ? err.message : err,
      });

      throw err;
    }
  },
});
