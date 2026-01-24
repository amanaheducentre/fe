import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import type { LectureDataRes } from "../../shared/types/lecture.schema";

// Mock useFetch globally
const mockUseFetch = vi.fn();
vi.stubGlobal("useFetch", mockUseFetch);

// Dynamic import for store to ensure mocks are applied
const getStore = async () => {
  const { useLectureStore } = await import("../../app/stores/lecture");
  return useLectureStore();
};

describe("useLectureStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  describe("State Initialization", () => {
    it("should initialize with correct default state", async () => {
      const store = await getStore();

      expect(store.lastLectureId).toBeUndefined();
      expect(store.lectures).toEqual({});
      expect(store.lecture).toEqual({});
    });
  });

  describe("setLastLectureId Action", () => {
    it("should set last lecture id", async () => {
      const store = (await getStore()) as any;

      store.setLastLectureId("lecture-123");

      expect(store.lastLectureId).toBe("lecture-123");
    });

    it("should update last lecture id when called multiple times", async () => {
      const store = (await getStore()) as any;

      store.setLastLectureId("lecture-1");
      expect(store.lastLectureId).toBe("lecture-1");

      store.setLastLectureId("lecture-2");
      expect(store.lastLectureId).toBe("lecture-2");
    });
  });

  describe("getLecture Action", () => {
    it("should return cached lecture if available", async () => {
      const store = (await getStore()) as any;

      const mockLecture = {
        id: "lecture-1",
        title: "Introduction to Programming",
        content: "Sample content",
      } as any;

      store.lectures["lecture-1"] = mockLecture;

      const result = await store.getLecture("lecture-1");

      expect(result).toEqual(mockLecture);
      expect(store.lecture).toEqual(mockLecture);
    });

    it("should fetch lecture from API if not cached", async () => {
      const store = (await getStore()) as any;

      const mockLecture = {
        id: "lecture-2",
        title: "Advanced TypeScript",
        content: "Advanced content",
      } as any;

      mockUseFetch.mockResolvedValue({
        data: { value: mockLecture },
      });

      const result = await store.getLecture("lecture-2");

      expect(mockUseFetch).toHaveBeenCalledWith("/api/lecture?lectureId=lecture-2");
      expect(result).toEqual(mockLecture);
      expect(store.lecture).toEqual(mockLecture);
      expect(store.lectures["lecture-2"]).toEqual(mockLecture);
    });

    it("should cache fetched lecture for subsequent calls", async () => {
      const store = (await getStore()) as any;

      const mockLecture = {
        id: "lecture-3",
        title: "Vue 3 Composition API",
      } as any;

      mockUseFetch.mockResolvedValue({
        data: { value: mockLecture },
      });

      // First call - should fetch from API
      await store.getLecture("lecture-3");
      expect(mockUseFetch).toHaveBeenCalledTimes(1);

      // Second call - should use cache
      await store.getLecture("lecture-3");
      expect(mockUseFetch).toHaveBeenCalledTimes(1); // Still 1, not called again
    });
  });

  describe("Store Persistence", () => {
    it("should have correct store id for persistence", async () => {
      const store = await getStore();
      expect(store.$id).toBe("lecture");
    });
  });
});
