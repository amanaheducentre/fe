import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CardCourse from "~/components/Card/Course.vue";

/**
 * Component tests for CardCourse
 * Testing course card rendering and user interactions
 */

describe("CardCourse Component", () => {
  describe("Props Rendering", () => {
    it("should render course title", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          title: "Introduction to Vue 3",
        },
      });

      expect(wrapper.text()).toContain("Introduction to Vue 3");
    });

    it("should render course image", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          image: "/img/course-thumbnail.jpg",
          title: "Course Title",
        },
      });

      const img = wrapper.find("img");
      expect(img.exists()).toBe(true);
    });

    it("should display price correctly", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          price: 200000,
          title: "Paid Course",
        },
      });

      expect(wrapper.text()).toContain("200000");
    });

    it("should display sold count", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          sold: 142,
          title: "Popular Course",
        },
      });

      expect(wrapper.text()).toContain("142");
    });

    it("should display rating information", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          star: 4,
          rating: 121,
          title: "Rated Course",
        },
      });

      // Check if rating-related content is rendered
      expect(wrapper.text()).toMatch(/4|121/);
    });
  });

  describe("Tags Display", () => {
    it("should render course tags", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          tags: ["Bestseller", "New", "Low Price"],
          title: "Tagged Course",
        },
      });

      expect(wrapper.text()).toContain("Bestseller");
      expect(wrapper.text()).toContain("New");
      expect(wrapper.text()).toContain("Low Price");
    });

    it("should handle empty tags array", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          tags: [],
          title: "No Tags Course",
        },
      });

      expect(wrapper.exists()).toBe(true);
    });

    it("should render single tag", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          tags: ["Featured"],
          title: "Single Tag Course",
        },
      });

      expect(wrapper.text()).toContain("Featured");
    });
  });

  describe("Default Props", () => {
    it("should use default values when props not provided", async () => {
      const wrapper = await mountSuspended(CardCourse);

      expect(wrapper.exists()).toBe(true);
    });

    it("should handle zero price", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          price: 0,
          title: "Free Course",
        },
      });

      expect(wrapper.text()).toContain("0");
    });

    it("should handle zero sold count", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          sold: 0,
          title: "New Course",
        },
      });

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("Component Structure", () => {
    it("should have correct component structure", async () => {
      const wrapper = await mountSuspended(CardCourse, {
        props: {
          title: "Test Course",
          image: "/test.jpg",
          price: 100000,
        },
      });

      // Component should be mounted
      expect(wrapper.vm).toBeDefined();
    });
  });
});
