import { checkAccount, setCookieToken, signUser } from ".";

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user, tokens }) {
    const check = await checkAccount({ email: user.email });

    // Sign user
    const res = await signUser({
      type: "sso",
      provider: "google",
      token: tokens.id_token,
    });

    await setUserSession(event, { user });
    setCookieToken(event, res.token);

    if (check.registered) {
      return sendRedirect(event, "/dashboard");
    }

    return sendRedirect(event, "/signup");
  },
});
