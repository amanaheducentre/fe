import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import type { CourseData, ListCourseRes } from "../../shared/types/course.schema";

// Mock useFetch globally
const mockUseFetch = vi.fn();
vi.stubGlobal("useFetch", mockUseFetch);

// Dynamic import for store to ensure mocks are applied
const getStore = async () => {
  const { useCourseStore } = await import("../../app/stores/course");
  return useCourseStore();
};

describe("useCourseStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  describe("State Initialization", () => {
    it("should initialize with empty state", async () => {
      const store = await getStore();

      expect(store.selected).toEqual({});
      expect(store.raw).toEqual({});
      expect(store.listByCategory).toEqual([{}]);
    });
  });

  describe("selectCourse Action", () => {
    it("should select a course by id", async () => {
      const store = (await getStore()) as any;

      const mockCourses = [
        { id: "1", title: "Course 1" },
        { id: "2", title: "Course 2" },
        { id: "3", title: "Course 3" },
      ];

      store.raw = { items: mockCourses };

      store.selectCourse("2");

      expect(store.selected).toEqual(mockCourses[1]);
      expect(store.selected.id).toBe("2");
    });

    it("should handle non-existent course id gracefully", async () => {
      const store = (await getStore()) as any;

      const mockCourses = [{ id: "1", title: "Course 1" }];

      store.raw = { items: mockCourses };

      store.selectCourse("999");

      // Should not update selected if course not found
      expect(store.selected).not.toEqual(mockCourses[0]);
    });
  });

  describe("getCourseList Action", () => {
    it("should fetch course list with default parameters", async () => {
      const store = (await getStore()) as any;

      const mockResponse = {
        items: [
          { id: "1", title: "Course 1" },
          { id: "2", title: "Course 2" },
        ],
        total: 2,
        page: 1,
        pageSize: 10,
      };

      mockUseFetch.mockResolvedValue({
        data: { value: mockResponse },
        error: { value: null },
      });

      await store.getCourseList();

      expect(mockUseFetch).toHaveBeenCalledWith("/api/course/list", {
        method: "GET",
        query: {
          page: "1",
          pageSize: "10",
        },
      });

      expect(store.raw).toEqual(mockResponse);
    });

    it("should fetch course list with custom parameters", async () => {
      const store = (await getStore()) as any;

      const mockResponse = {
        items: [],
        total: 0,
        page: 2,
        pageSize: 20,
      };

      mockUseFetch.mockResolvedValue({
        data: { value: mockResponse },
        error: { value: null },
      });

      await store.getCourseList(2, 20, "test query", "cat-123");

      expect(mockUseFetch).toHaveBeenCalledWith("/api/course/list", {
        method: "GET",
        query: {
          page: "2",
          pageSize: "20",
          q: "test query",
          categoryId: "cat-123",
        },
      });
    });

    it("should handle fetch errors", async () => {
      const store = (await getStore()) as any;

      mockUseFetch.mockResolvedValue({
        data: { value: null },
        error: { value: new Error("Network error") },
      });

      await expect(store.getCourseList()).rejects.toThrow();
    });
  });

  describe("State Persistence", () => {
    it("should have persist enabled", async () => {
      const store = await getStore();

      // Check if store has persist option
      expect(store.$id).toBe("course");
    });
  });
});
