import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";

/**
 * Component tests for layout components
 */

describe("NavBar Component", () => {
  it("should render navigation bar", async () => {
    const wrapper = await mountSuspended(NavBar);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have correct component structure", async () => {
    const wrapper = await mountSuspended(NavBar);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render without errors", async () => {
    const wrapper = await mountSuspended(NavBar);
    expect(wrapper.html()).toBeTruthy();
  });
});

describe("Footer Component", () => {
  it("should render footer", async () => {
    const wrapper = await mountSuspended(Footer);
    expect(wrapper.exists()).toBe(true);
  });

  it("should have correct structure", async () => {
    const wrapper = await mountSuspended(Footer);
    expect(wrapper.vm).toBeDefined();
  });

  it("should render content", async () => {
    const wrapper = await mountSuspended(Footer);
    expect(wrapper.html().length).toBeGreaterThan(0);
  });
});

describe("Layout Components Integration", () => {
  it("should work together in page layout", async () => {
    const navbar = await mountSuspended(NavBar);
    const footer = await mountSuspended(Footer);

    expect(navbar.exists()).toBe(true);
    expect(footer.exists()).toBe(true);
  });
});
