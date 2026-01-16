import type { UserRegBody, UserRegRes } from "~~/shared/types/user.schema";
import { z } from "zod";
import { apiFetch, mustOk } from "~~/server/utils/api";
import { setCookieToken, signUser } from ".";

const bodySchema = z.object({
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { password } = await readValidatedBody(event, bodySchema.parse);
  const { user } = await requireUserSession(event);

  const payload = {
    ...user,
    password,
  };

  const reg = mustOk(
    await apiFetch<UserRegRes>("/user/register", {
      method: "POST",
      body: <UserRegBody>{
        ...payload,
      },
    })
  );

  const res = await signUser({
    type: "local",
    email: user.email,
    password,
  });

  await setUserSession(event, { reg });
  setCookieToken(event, res.token);
});
