import type { UserDataRes, UserLoginBody, UserLoginRes } from "~~/shared/types/user.schema";
import { z } from "zod";
import { apiFetch, mustOk } from "~~/server/utils/api";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const res = mustOk(
    await apiFetch<UserLoginRes>("/sign", {
      method: "POST",
      body: <UserLoginBody>{
        email: email,
        password: password,
      },
    })
  );

  const user = mustOk(
    await apiFetch<UserDataRes>("/user/profile", {
      headers: {
        authorization: "Bearer " + res.token,
      },
    })
  );

  await setUserSession(event, { user });

  setCookie(event, "user-token", res.token, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    httpOnly: false,
    secure: false,
  });
  return res.token;
});
