import type { UserDataRes } from "~~/shared/types/user.schema";
import { z } from "zod";
import { apiFetch, mustOk } from "~~/server/utils/api";
import { signUser, setCookieToken } from ".";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const res = await signUser({
    type: "local",
    email,
    password,
  });

  const user = mustOk(
    await apiFetch<UserDataRes>("/user/profile", {
      headers: {
        authorization: "Bearer " + res.token,
      },
    })
  );

  await setUserSession(event, { user });
  setCookieToken(event, res.token);

  return res.token;
});
