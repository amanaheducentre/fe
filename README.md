# Amanah Edu Centre - Frontend

Frontend application for LKP Amanah Edu Centre, a Nuxt-based modern web application with TypeScript, Pinia state management, and comprehensive API integration.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 🧪 Testing

Comprehensive test suite covering stores, components, pages, utilities, validation, middleware, API endpoints, and TypeScript types.

### Run Tests

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Generate coverage report
bun run test:coverage

# Run specific test file
bun run test test/unit/stores.course.test.ts

# Run tests with UI
bun run test --ui
```

### Test Organization

- `test/unit/` - Unit tests for stores, utilities, validation, middleware
- `test/nuxt/` - Integration tests for components, pages, API endpoints requiring Nuxt environment
- `test/README.md` - Comprehensive testing documentation and guidelines

### Coverage Goals

- **Statements**: >80%
- **Branches**: >75%
- **Functions**: >80%
- **Lines**: >80%

See [test/README.md](test/README.md) for detailed testing documentation.

---

## 🤖 AI Development Rules

### 📋 Project Overview

- **Framework**: Nuxt 4.3.0 with Vue 3.5.27 and TypeScript 5.9.3
- **Package Manager**: Bun (preferred)
- **API Backend**: https://api.lkpamanaheducentre.id
- **State Management**: Pinia with persistence (localStorage)
- **UI Framework**: Nuxt UI with Tailwind CSS 4.x
- **Testing**: Vitest with coverage support
- **Authentication**: nuxt-auth-utils with session management

### Reference

- Cikal: https://cikal.co.id
- Udemy: https://udemy.com
- JIS: https://jisedu.or.id

### 🏗️ Architecture Patterns

#### Directory Structure Rules

```
app/                 # Client-side application code
├── components/      # Vue components (organized by feature/type)
├── layouts/         # Layout wrappers (base, default, sidebar)
├── middleware/      # Route middleware (auth, etc.)
├── pages/           # File-based routing pages
├── stores/          # Pinia stores (course, lecture, etc.)
└── utils/           # Client-side utilities

server/              # Server-side code (Nitro)
├── api/             # API routes (/api/*)
├── middleware/      # Server middleware (trace-id, logging)
└── utils/           # Server utilities (log, api, session)

shared/              # Shared types between client/server
└── types/           # TypeScript definitions (OpenAPI-generated)

public/              # Static assets (images, fonts, etc.)
```

#### Naming Conventions

- **Files**: kebab-case (`course-list.vue`, `auth-utils.ts`)
- **Components**: PascalCase in code, kebab-case files (`CardCourse.vue` → `<CardCourse>`)
- **Stores**: camelCase with `Store` suffix (`useCourseStore`)
- **API Routes**: RESTful naming (`[id].get.ts`, `login.post.ts`)
- **Types**: PascalCase with descriptive suffix (`CourseData`, `ListCourseRes`)

### 🔧 Code Style & Standards

#### TypeScript

- **Always use TypeScript** for all `.ts`, `.vue`, and configuration files
- Import types from `shared/types/` for API-related data
- Use Zod for runtime validation (e.g., `bodySchema.parse`)
- Prefer type inference, but explicitly type function returns for clarity
- Use `type` over `interface` for object shapes

```typescript
// ✅ Good
import type { CourseData } from "~~/shared/types/course.schema";

const bodySchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default defineEventHandler(async (event): Promise<string> => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  // ...
});

// ❌ Avoid
export default defineEventHandler(async (event) => {
  const body = await readBody(event); // No validation
  // ...
});
```

#### Vue Components

- Use `<script setup>` syntax exclusively
- Define props with `defineProps` using TypeScript or runtime validation
- Use composables for reusable logic (`useCourseStore`, `useUserSession`)
- Organize imports: types → composables → components → utils
- Keep components focused (single responsibility)

```vue
<script setup lang="ts">
import type { CourseData } from "~~/shared/types/course.schema";

const props = defineProps<{
  course: CourseData;
  featured?: boolean;
}>();

const courseStore = useCourseStore();

// Component logic here
</script>

<template>
  <!-- Template here -->
</template>
```

#### API Routes & Server Code

- Use `defineEventHandler` for all API endpoints
- Implement structured logging with `withEventLogger`
- Include trace ID for request tracking (auto-added by middleware)
- Validate inputs with Zod schemas
- Use `apiFetch` helper for backend API calls
- Handle errors gracefully with proper HTTP status codes
- Log events at appropriate levels (debug, info, warn, error)

```typescript
import { z } from "zod";
import { withEventLogger } from "~~/server/utils/log";
import { apiFetch, mustOk } from "~~/server/utils/api";

const querySchema = z.object({
  page: z.string().optional(),
  pageSize: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const log = withEventLogger(event, { scope: "course:list" });

  log.info("Fetching course list", { event: "fetch_courses" });

  try {
    const query = await getValidatedQuery(event, querySchema.parse);
    const data = await apiFetch("/courses", { query });

    log.info("Courses fetched successfully", {
      event: "fetch_success",
      count: data.items.length,
    });

    return data;
  } catch (err) {
    log.error("Failed to fetch courses", {
      event: "fetch_error",
      error: err instanceof Error ? err.message : err,
    });
    throw err;
  }
});
```

#### State Management (Pinia)

- Create feature-based stores (course, lecture, user, etc.)
- Use `persist: true` for stores that need localStorage persistence
- Define state with TypeScript types
- Use actions for async operations and mutations
- Access stores via composables (`useCourseStore()`)

```typescript
import { defineStore } from "pinia";
import type { CourseData } from "~~/shared/types/course.schema";

export const useCourseStore = defineStore("course", {
  state: () => ({
    selected: {} as CourseData,
    list: [] as CourseData[],
  }),

  actions: {
    async fetchCourses(page: number = 1) {
      const { data } = await useFetch("/api/course/list", {
        query: { page: page.toString() },
      });
      this.list = data.value?.data?.items || [];
    },

    selectCourse(id: string) {
      this.selected = this.list.find((c) => c.id === id) || ({} as CourseData);
    },
  },

  persist: true, // Enable localStorage persistence
});
```

### 🔐 Authentication & Authorization

- Use `nuxt-auth-utils` for session management
- Protect routes with `auth.ts` middleware
- Store user session server-side with `setUserSession()`
- Store JWT token in HTTP-only cookie via `setCookieToken()`
- Check authentication status with `useUserSession().loggedIn`
- Never expose sensitive data (tokens, passwords) in client code

```typescript
// Middleware: app/middleware/auth.ts
export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/login");
  }
});

// API: server/api/auth/login.post.ts
const user = await authenticateUser(email, password);
await setUserSession(event, { user });
setCookieToken(event, token);
```

### 🌐 API Integration

- **OpenAPI Types**: Auto-generated from backend (`bun run gen:openapi`)
- Import types from `shared/types/openapi.d.ts`
- Use `apiFetch` utility for backend calls (includes error handling)
- Use `useFetch` composable for client-side API calls
- Use `$fetch` for one-off requests without reactivity

```typescript
// Type-safe API calls
import type { CourseDetailData } from "~~/shared/types/course.schema";

// Server-side
const data = await apiFetch<CourseDetailData>(`/course/${id}`, {
  headers: { authorization: `Bearer ${token}` },
});

// Client-side (reactive)
const { data, error, pending } = await useFetch(`/api/course/${id}`);

// Client-side (one-off)
const data = await $fetch(`/api/course/${id}`);
```

### 📝 Logging & Observability

- **Winston logger** for structured logging (server-side)
- Log with context: `scope`, `event`, `traceId`
- Use appropriate log levels: `debug`, `info`, `warn`, `error`
- Redact sensitive data automatically (tokens, passwords, cookies)
- All requests get unique `traceId` via middleware
- Prometheus metrics available via `@artmizu/nuxt-prometheus`

```typescript
const log = withEventLogger(event, { scope: "feature:action" });

log.debug("Detailed debug info", { event: "debug_event", data: {...} });
log.info("Important event occurred", { event: "user_action" });
log.warn("Warning condition", { event: "rate_limit" });
log.error("Error occurred", { event: "api_error", error: err.message });
```

### 🎨 UI/UX Guidelines

- Use **Nuxt UI components** (`@nuxt/ui`) for consistency
- Customize via `app.config.ts` for theme overrides
- Use Tailwind utility classes for styling
- Implement responsive design (sm, md, lg, xl, 2xl breakpoints)
- Use `@nuxt/image` for optimized images
- Use `@nuxt/icon` for icons (collection: `uil`, `qlementine-icons`)
- Implement loading states with `pending` from `useFetch`
- Add page transitions: `pageTransition: { name: "page", mode: "out-in" }`

```vue
<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-bold">{{ title }}</h2>
    </template>

    <NuxtImg :src="image" :alt="title" loading="lazy" sizes="sm:320px md:640px lg:1024px" />

    <UIcon name="i-uil-star" class="text-yellow-500" />
  </UCard>
</template>
```

### ⚡ Performance Best Practices

- Use `useFetch` instead of `$fetch` for SSR and caching
- Leverage Nuxt's auto-imports (no need to import Vue/Nuxt APIs)
- Use lazy loading for heavy components (`defineAsyncComponent`)
- Optimize images with `@nuxt/image` (automatic format conversion)
- Implement code splitting per route (automatic with pages/)
- Use `useAsyncData` for data that doesn't need reactivity
- Enable Pinia persistence only for necessary stores

### 🧪 Testing

- Use **Vitest** for unit and integration tests
- Test files: `*.test.ts` in `test/` directory
- Run tests: `bun run test` or `bun run test:watch`
- Coverage: `bun run test:coverage`
- Test components with `@vue/test-utils`
- Mock API calls in tests

```typescript
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CardCourse from "~/components/Card/Course.vue";

describe("CardCourse", () => {
  it("renders course title", () => {
    const wrapper = mount(CardCourse, {
      props: { title: "Test Course" },
    });
    expect(wrapper.text()).toContain("Test Course");
  });
});
```

### 🔄 Development Workflow

1. **Start dev server**: `bun run dev` (auto-generates OpenAPI types)
2. **Type generation**: `bun run gen:openapi` (if backend updated)
3. **Linting**: Uses `@nuxt/eslint` (auto-configured)
4. **Hot reload**: Automatic for all code changes
5. **DevTools**: Press `Shift + Alt + D` in browser

### 🚀 Deployment

- **Target**: NuxtHub/Cloudflare/Vercel (via `@nuxthub/core`)
- **Build**: `bun run build`
- **Preview**: `bun run preview`
- **Environment Variables**: Configure in `.env` (not committed)
- **Database**: Uses Drizzle ORM (check `drizzle.config.ts`)

### ⚠️ Common Pitfalls to Avoid

- ❌ Don't use `any` type - always specify types
- ❌ Don't fetch data in `<script setup>` without `useFetch`/`useAsyncData`
- ❌ Don't store sensitive data in Pinia stores (use server session)
- ❌ Don't use `localStorage` directly (use Pinia persistence)
- ❌ Don't forget to validate user inputs with Zod
- ❌ Don't skip error handling in API routes
- ❌ Don't hardcode API URLs (use `apiFetch` with relative paths)
- ❌ Don't log sensitive data (auto-redacted but be careful)

### 📚 Key Dependencies

- **Core**: Nuxt 4, Vue 3, TypeScript, Nitro
- **UI**: Nuxt UI, Tailwind CSS, Nuxt Icon, Nuxt Image
- **State**: Pinia, pinia-plugin-persistedstate
- **Auth**: nuxt-auth-utils
- **Validation**: Zod
- **Logging**: Winston, Pino
- **Testing**: Vitest, @vue/test-utils
- **Monitoring**: @artmizu/nuxt-prometheus
- **Utils**: VueUse, ofetch, h3

### 🎯 When Adding New Features

1. **Types first**: Define TypeScript types in `shared/types/`
2. **API route**: Create in `server/api/` with validation and logging
3. **Store**: Add Pinia store if state management needed
4. **Component**: Create reusable components in `app/components/`
5. **Page**: Add page in `app/pages/` (auto-routed)
6. **Test**: Write tests in `test/` directory
7. **Docs**: Update this README if architecture changes

### 📖 Additional Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Pinia Documentation](https://pinia.vuejs.org)
- [Vitest Documentation](https://vitest.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
