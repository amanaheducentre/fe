# Test Documentation

## Test Structure

This project uses **Vitest** for unit and integration testing with comprehensive coverage across all application layers.

### Test Organization

```
test/
├── unit/              # Unit tests (Node environment)
│   ├── stores.*.test.ts       # Pinia store tests
│   ├── utils.*.test.ts        # Utility function tests
│   ├── validation.*.test.ts   # Zod schema tests
│   ├── middleware.*.test.ts   # Middleware tests
│   ├── api.*.test.ts          # API response tests
│   └── server.*.test.ts       # Server utility tests
└── nuxt/              # Nuxt environment tests
    ├── components.*.test.ts   # Component tests
    ├── pages.*.test.ts        # Page tests
    └── api.*.test.ts          # API endpoint tests
```

## Running Tests

### All Tests

```bash
bun run test
```

### Watch Mode

```bash
bun run test:watch
```

### Coverage Report

```bash
bun run test:coverage
```

### Unit Tests Only

```bash
bun run test:unit
```

### Nuxt Tests Only

```bash
bun run test:nuxt
```

## Test Coverage

### 1. **Store Tests** (`test/unit/stores.*.test.ts`)

- ✅ State initialization
- ✅ Actions and mutations
- ✅ Async data fetching
- ✅ Caching mechanisms
- ✅ Persistence behavior
- ✅ Error handling

**Example:**

```typescript
import { setActivePinia, createPinia } from "pinia";
import { useCourseStore } from "~/stores/course";

describe("useCourseStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch courses", async () => {
    const store = useCourseStore();
    await store.getCourseList();
    expect(store.raw.items).toBeDefined();
  });
});
```

### 2. **Component Tests** (`test/nuxt/components.*.test.ts`)

- ✅ Props rendering
- ✅ Event emissions
- ✅ Slot content
- ✅ Conditional rendering
- ✅ Component lifecycle
- ✅ User interactions

**Example:**

```typescript
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CardCourse from "~/components/Card/Course.vue";

it("should render course card", async () => {
  const wrapper = await mountSuspended(CardCourse, {
    props: { title: "Test Course" },
  });
  expect(wrapper.text()).toContain("Test Course");
});
```

### 3. **Validation Tests** (`test/unit/validation.*.test.ts`)

- ✅ Zod schema validation
- ✅ Email format validation
- ✅ Password strength checks
- ✅ Query parameter validation
- ✅ Custom validation rules
- ✅ Error messages

### 4. **API Tests** (`test/nuxt/api.*.test.ts`)

- ✅ Request/response structure
- ✅ Authentication flows
- ✅ Error handling
- ✅ Status codes
- ✅ Pagination
- ✅ Query parameters

### 5. **Middleware Tests** (`test/unit/middleware.*.test.ts`)

- ✅ Authentication checks
- ✅ Route protection
- ✅ Session validation
- ✅ Redirect logic
- ✅ Permission checks

### 6. **Utility Tests** (`test/unit/utils.*.test.ts`)

- ✅ Time/date functions
- ✅ Window utilities
- ✅ String manipulation
- ✅ Array operations
- ✅ Object operations
- ✅ Type checking

### 7. **TypeScript Tests** (`test/unit/typescript.*.test.ts`)

- ✅ Type definitions
- ✅ Generic types
- ✅ Union types
- ✅ Type guards
- ✅ Utility types

## Best Practices

### 1. **Test Naming**

```typescript
// ✅ Good - Descriptive and clear
describe("useCourseStore", () => {
  describe("getCourseList Action", () => {
    it("should fetch courses with pagination", async () => {
      // test
    });
  });
});

// ❌ Bad - Vague and unclear
describe("store", () => {
  it("works", () => {
    // test
  });
});
```

### 2. **Test Isolation**

```typescript
beforeEach(() => {
  // Reset state before each test
  setActivePinia(createPinia());
  vi.clearAllMocks();
});
```

### 3. **Mocking**

```typescript
// Mock external dependencies
vi.mock("#app", () => ({
  useFetch: vi.fn(),
}));

// Mock with specific return values
vi.mocked(useFetch).mockResolvedValue({
  data: { value: mockData },
  error: { value: null },
});
```

### 4. **Async Testing**

```typescript
// ✅ Good - Properly await async operations
it("should handle async data", async () => {
  const result = await store.fetchData();
  expect(result).toBeDefined();
});

// ❌ Bad - Missing await
it("should handle async data", () => {
  const result = store.fetchData();
  expect(result).toBeDefined(); // Will fail
});
```

### 5. **Component Testing**

```typescript
// Use mountSuspended for Nuxt components
const wrapper = await mountSuspended(Component, {
  props: {
    /* props */
  },
  global: {
    plugins: [
      /* plugins */
    ],
  },
});
```

## Coverage Goals

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## Writing New Tests

### 1. Identify Test Type

- **Unit**: Pure functions, utilities, isolated logic
- **Nuxt**: Components, pages, composables requiring Nuxt context

### 2. Create Test File

```bash
# Unit test
touch test/unit/feature-name.test.ts

# Nuxt test
touch test/nuxt/feature-name.test.ts
```

### 3. Follow Template

```typescript
import { describe, it, expect, beforeEach } from "vitest";

describe("Feature Name", () => {
  beforeEach(() => {
    // Setup
  });

  describe("Specific Functionality", () => {
    it("should do something specific", () => {
      // Arrange
      const input = "test";

      // Act
      const result = functionToTest(input);

      // Assert
      expect(result).toBe("expected");
    });
  });
});
```

## Debugging Tests

### Run Specific Test

```bash
bun run test test/unit/stores.course.test.ts
```

### Debug Mode

```bash
bun run test --inspect-brk
```

### Verbose Output

```bash
bun run test --reporter=verbose
```

## CI/CD Integration

Tests run automatically on:

- ✅ Pull requests
- ✅ Push to main branch
- ✅ Pre-commit hooks (optional)

## Common Issues

### Issue: Mock not working

**Solution:** Ensure mock is defined before imports

```typescript
vi.mock("#app", () => ({ useFetch: vi.fn() }));
import { useCourseStore } from "~/stores/course";
```

### Issue: Component not mounting

**Solution:** Use `mountSuspended` for Nuxt components

```typescript
const wrapper = await mountSuspended(Component);
```

### Issue: Async test timeout

**Solution:** Increase timeout or check for hanging promises

```typescript
it(
  "should handle async",
  async () => {
    // ...
  },
  { timeout: 10000 },
);
```

## Resources

- [Vitest Documentation](https://vitest.dev)
- [Vue Test Utils](https://test-utils.vuejs.org)
- [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
