<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";
import type { BaseDataRes } from "~~/shared/types/base.schema";
import { unwrapFetchError } from "~~/server/utils/api";

definePageMeta({
  layout: "base",
});

const stateStore = useStateStore();
const toast = useToast();
const errors = ref<Array<string>>([]);

const fields = ref<AuthFormField[]>([
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Masukkan email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Masukkan password",
    required: true,
  },
  {
    name: "remember",
    label: "Remember me",
    type: "checkbox",
  },
]);

const providers = ref([
  {
    label: "Google",
    icon: "i-simple-icons-google",
    onClick: async () => {
      await navigateTo("/api/auth/google", {
        external: true,
      });
    },
  },
  {
    label: "Apple",
    icon: "i-simple-icons-apple",
    onClick: () => {
      toast.add({ title: "Apple", description: "Login with Apple" });
    },
  },
]);

const schema = z.object({
  email: z.email("Invalid email"),
  password: z.string("Password is required").min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;
const loginBody = ref<Schema | null>(null);
const {
  error,
  pending,
  execute: doLogin,
} = useFetch("/api/auth/login", {
  method: "POST",
  body: loginBody,
  immediate: false,
  watch: false,
});

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (pending.value) return;

  errors.value = [];
  loginBody.value = payload.data;
  await doLogin();

  if (error.value) {
    const err = unwrapFetchError<BaseDataRes>(error.value);
    errors.value = err?.errors?.map((item) => item.message) ?? [];
    return;
  }

  await navigateTo("/lms", {
    external: true,
  });
}
</script>

<template>
  <UModal
    v-model:open="stateStore.loginOpen"
    title="Login Form"
    :ui="{
      overlay: 'backdrop-blur-md',
    }"
  >
    <template #content>
      <UContainer>
        <UAuthForm
          :schema="schema"
          :fields="fields"
          :providers="providers"
          separator="Masuk dengan Email"
          color="neutral"
          title="Selamat Datang!"
          icon="i-lucide-lock"
          :submit="{
            label: 'Masuk',
            color: 'neutral',
            class: 'bg-raka-orange',
            loading: pending,
            disabled: pending,
          }"
          class="py-8"
          @submit.prevent="onSubmit"
        >
          <template #description>
            <div class="flex w-full justify-center gap-2">
              <p>Masuk dengan akun anda untuk melanjutkan</p>
            </div>
          </template>
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
      </UContainer>
    </template>
  </UModal>
</template>
