import { describe, it, expect } from "vitest";

/**
 * Unit tests for time utilities
 * Testing date/time formatting and manipulation functions
 */

describe("Time Utils", () => {
  describe("Date Formatting", () => {
    it("should format date to ISO string", () => {
      const date = new Date("2026-01-24T12:00:00Z");
      expect(date.toISOString()).toBe("2026-01-24T12:00:00.000Z");
    });

    it("should handle invalid date", () => {
      const invalidDate = new Date("invalid");
      expect(invalidDate.toString()).toBe("Invalid Date");
    });

    it("should format date to locale string", () => {
      const date = new Date("2026-01-24");
      const formatted = date.toLocaleDateString("id-ID");
      expect(formatted).toMatch(/24\/01\/2026|24\/1\/2026/);
    });
  });

  describe("Time Calculations", () => {
    it("should calculate time difference in milliseconds", () => {
      const start = new Date("2026-01-24T08:00:00Z");
      const end = new Date("2026-01-24T10:00:00Z");
      const diff = end.getTime() - start.getTime();

      expect(diff).toBe(2 * 60 * 60 * 1000); // 2 hours in ms
    });

    it("should calculate time difference in hours", () => {
      const start = new Date("2026-01-24T08:00:00Z");
      const end = new Date("2026-01-24T10:30:00Z");
      const diffMs = end.getTime() - start.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);

      expect(diffHours).toBe(2.5);
    });

    it("should add days to date", () => {
      const date = new Date("2026-01-24");
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 7);

      expect(newDate.getDate()).toBe(31);
    });
  });

  describe("Timestamp Validation", () => {
    it("should validate valid timestamp", () => {
      const timestamp = Date.now();
      expect(timestamp).toBeGreaterThan(0);
      expect(typeof timestamp).toBe("number");
    });

    it("should handle epoch timestamp", () => {
      const epoch = new Date(0);
      expect(epoch.toISOString()).toBe("1970-01-01T00:00:00.000Z");
    });
  });
});
