<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import type { BaseDataRes } from "~~/shared/types/base.schema";
import { unwrapFetchError } from "~~/server/utils/api";

const { user } = useUserSession();

definePageMeta({
  layout: "base",
});

console.log(user.value);

const errors = ref<Array<string>>([]);
const fields = ref<AuthFormField[]>([
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Masukkan password",
    required: true,
  },
  {
    name: "confirmPassword",
    label: "Verifikasi Password",
    type: "password",
    placeholder: "Masukkan ulang password",
    required: true,
  },
]);

const schema = z
  .object({
    password: z.string("Password is required").min(8, "Must be at least 8 characters"),
    confirmPassword: z.string("Password is required").min(8, "Must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["password2"],
  });
type Schema = z.output<typeof schema>;

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  try {
    await $fetch("/api/auth/register", {
      method: "POST",
      body: payload.data,
    });

    await navigateTo("/dashboard", {
      external: true,
    });
  } catch (e) {
    const err = unwrapFetchError<BaseDataRes>(e);
    errors.value = err?.errors?.map((item) => item.message) ?? [];
  }
}
</script>

<template>
  <div class="flex flex-col min-w-screen min-h-screen">
    <GradientBackground class="flex justify-center items-center">
      <div class="flex flex-col items-center justify-center gap-4 p-4">
        <UPageCard class="w-full max-w-md bg-white/70 ring-0">
          <UAuthForm
            :schema="schema"
            :fields="fields"
            color="neutral"
            title="Selamat Datang!"
            icon="i-lucide-lock"
            :submit="{
              label: 'Daftar',
              color: 'neutral',
              class: 'bg-raka-orange',
            }"
            @submit.prevent="onSubmit"
          >
            <template #password-hint>
              <NuxtLink to="#" class="text-raka-orange font-medium" tabindex="-1">Forgot password?</NuxtLink>
            </template>
            <template #validation>
              <UAlert
                v-if="errors.length > 0"
                color="error"
                icon="i-lucide-info"
                title="Error signing in"
                :description="errors.join(', ')"
              />
            </template>
            <template #footer>
              Dengan masuk, anda setuju dengan
              <ULink to="#" class="text-raka-orange font-medium">Syarat dan Ketentuan</ULink>
              yang berlaku.
            </template>
          </UAuthForm>
        </UPageCard>
      </div>
    </GradientBackground>
  </div>
</template>
