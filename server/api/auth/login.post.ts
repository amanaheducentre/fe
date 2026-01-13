import type { UserDataRes, UserLoginBody, UserLoginRes } from "~~/shared/types/user.schema";
import { z } from "zod";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);

  const res = await $fetch<UserLoginRes>(process.env.NUXT_API_BASE_URL! + "/sign", {
    method: "POST",
    body: <UserLoginBody>{
      email: email,
      password: password,
    },
  });

  if (res.token) {
    const user = await $fetch<UserDataRes>(process.env.NUXT_API_BASE_URL! + "/user/profile", {
      headers: {
        authorization: "Bearer " + res.token,
      },
    });

    if (user) {
      await setUserSession(event, { user });
    } else {
      throw createError({
        status: 401,
      });
    }

    return res;
  }

  throw createError({
    status: 401,
    message: "Bad credentials",
  });
});
