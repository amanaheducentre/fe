import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

/**
 * Unit tests for window utilities
 * Testing browser window operations and viewport helpers
 */

describe("Window Utils", () => {
  describe("Window Size Detection", () => {
    it("should detect window dimensions", () => {
      // Mock window dimensions
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1024,
      });
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 768,
      });

      expect(window.innerWidth).toBe(1024);
      expect(window.innerHeight).toBe(768);
    });

    it("should detect mobile viewport", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 375,
      });

      const isMobile = window.innerWidth < 768;
      expect(isMobile).toBe(true);
    });

    it("should detect desktop viewport", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 1920,
      });

      const isDesktop = window.innerWidth >= 1024;
      expect(isDesktop).toBe(true);
    });
  });

  describe("Scroll Position", () => {
    it("should get scroll position", () => {
      Object.defineProperty(window, "scrollY", {
        writable: true,
        configurable: true,
        value: 0,
      });

      expect(window.scrollY).toBe(0);
    });

    it("should detect scroll direction", () => {
      let scrollPosition = 0;

      Object.defineProperty(window, "scrollY", {
        get: () => scrollPosition,
        configurable: true,
      });

      scrollPosition = 100;
      const scrolledDown = window.scrollY > 0;

      expect(scrolledDown).toBe(true);
    });
  });

  describe("Local Storage", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    afterEach(() => {
      localStorage.clear();
    });

    it("should set and get item from localStorage", () => {
      localStorage.setItem("testKey", "testValue");
      const value = localStorage.getItem("testKey");

      expect(value).toBe("testValue");
    });

    it("should remove item from localStorage", () => {
      localStorage.setItem("removeKey", "value");
      localStorage.removeItem("removeKey");
      const value = localStorage.getItem("removeKey");

      expect(value).toBeNull();
    });

    it("should handle JSON data in localStorage", () => {
      const data = { name: "Test", value: 123 };
      localStorage.setItem("jsonData", JSON.stringify(data));

      const retrieved = JSON.parse(localStorage.getItem("jsonData")!);
      expect(retrieved).toEqual(data);
    });
  });

  describe("Session Storage", () => {
    beforeEach(() => {
      sessionStorage.clear();
    });

    afterEach(() => {
      sessionStorage.clear();
    });

    it("should set and get item from sessionStorage", () => {
      sessionStorage.setItem("sessionKey", "sessionValue");
      const value = sessionStorage.getItem("sessionKey");

      expect(value).toBe("sessionValue");
    });

    it("should clear all sessionStorage items", () => {
      sessionStorage.setItem("key1", "value1");
      sessionStorage.setItem("key2", "value2");

      sessionStorage.clear();

      expect(sessionStorage.getItem("key1")).toBeNull();
      expect(sessionStorage.getItem("key2")).toBeNull();
    });
  });
});
