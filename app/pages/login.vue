<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui";

definePageMeta({
    layout: "base",
});

const toast = useToast();
const errors = ref<Array<string>>([]);
const pageMenu = ref("login");

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
    password: z
        .string("Password is required")
        .min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

function onSubmit(payload: FormSubmitEvent<Schema>) {
    console.log("Submitted", payload);
    console.log("Simulating errors");
    errors.value = ["Account not found"];
}

watch(pageMenu, () => {
    if (pageMenu.value == "login") {
        fields.value = [
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
        ];
    } else {
        fields.value = [];
    }
});
</script>

<template>
    <div class="flex flex-col min-w-screen min-h-screen">
        <GradientBackground class="flex justify-center items-center">
            <div class="flex flex-col items-center justify-center gap-4 p-4">
                <UPageCard class="w-full max-w-md bg-white/70 ring-0">
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
                        }"
                        @submit="onSubmit"
                    >
                        <template #description>
                            <div class="flex w-full justify-center gap-2">
                                <p>
                                    {{
                                        pageMenu == "login" ? "Belum" : "Sudah"
                                    }}
                                    punya akun?
                                </p>
                                <NuxtLink
                                    class="text-raka-orange font-medium"
                                    @click="
                                        () => {
                                            pageMenu =
                                                pageMenu == 'login'
                                                    ? 'register'
                                                    : 'login';
                                        }
                                    "
                                    >{{
                                        pageMenu == "login" ? "Daftar" : "Masuk"
                                    }}</NuxtLink
                                >
                            </div>
                        </template>
                        <template #password-hint>
                            <NuxtLink
                                to="#"
                                class="text-raka-orange font-medium"
                                tabindex="-1"
                                >Forgot password?</NuxtLink
                            >
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
                            <ULink to="#" class="text-raka-orange font-medium"
                                >Syarat dan Ketentuan</ULink
                            >
                            yang berlaku.
                        </template>
                    </UAuthForm>
                </UPageCard>
            </div>
        </GradientBackground>
    </div>
</template>
