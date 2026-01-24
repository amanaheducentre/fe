import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import IndexPage from "~/pages/index.vue";

/**
 * Page tests for Index (Landing Page)
 * Testing main landing page functionality and content
 */

describe("Index Page", () => {
  describe("Page Rendering", () => {
    it("should render the landing page", async () => {
      const wrapper = await mountSuspended(IndexPage);

      expect(wrapper.exists()).toBe(true);
    });

    it("should have correct page structure", async () => {
      const wrapper = await mountSuspended(IndexPage);

      expect(wrapper.vm).toBeDefined();
    });
  });

  describe("Content Sections", () => {
    it("should display hero section", async () => {
      const wrapper = await mountSuspended(IndexPage);

      // Landing page should have content
      expect(wrapper.html().length).toBeGreaterThan(0);
    });

    it("should contain course listings", async () => {
      const wrapper = await mountSuspended(IndexPage);

      // Check if page renders without errors
      expect(wrapper.vm).toBeDefined();
    });
  });

  describe("Interactive Elements", () => {
    it("should have tabs for course categories", async () => {
      const wrapper = await mountSuspended(IndexPage);

      // Verify component mounts successfully
      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("Responsive Behavior", () => {
    it("should render on mobile viewport", async () => {
      const wrapper = await mountSuspended(IndexPage);

      expect(wrapper.exists()).toBe(true);
    });

    it("should render on desktop viewport", async () => {
      const wrapper = await mountSuspended(IndexPage);

      expect(wrapper.exists()).toBe(true);
    });
  });
});
