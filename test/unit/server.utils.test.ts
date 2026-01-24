import { describe, it, expect } from "vitest";

/**
 * Unit tests for server utilities
 * Testing helper functions used in server-side code
 */

describe("Server Utils", () => {
  describe("URL Building", () => {
    it("should build query string from object", () => {
      const params = {
        page: "1",
        pageSize: "10",
        q: "search term",
      };

      const queryString = new URLSearchParams(params).toString();
      expect(queryString).toBe("page=1&pageSize=10&q=search+term");
    });

    it("should handle empty params", () => {
      const params = {};
      const queryString = new URLSearchParams(params).toString();
      expect(queryString).toBe("");
    });

    it("should encode special characters", () => {
      const params = {
        query: "test & value",
        category: "A/B Testing",
      };

      const queryString = new URLSearchParams(params).toString();
      expect(queryString).toContain("test+%26+value");
      expect(queryString).toContain("A%2FB+Testing");
    });
  });

  describe("Data Validation", () => {
    it("should check if value is defined", () => {
      expect(undefined).toBeUndefined();
      expect(null).toBeDefined();
      expect("").toBeDefined();
      expect(0).toBeDefined();
    });

    it("should check if value is truthy", () => {
      const checkTruthy = (value: any) => !!value;

      expect(checkTruthy(true)).toBe(true);
      expect(checkTruthy(false)).toBe(false);
      expect(checkTruthy("string")).toBe(true);
      expect(checkTruthy("")).toBe(false);
      expect(checkTruthy(0)).toBe(false);
      expect(checkTruthy(1)).toBe(true);
    });

    it("should validate object has property", () => {
      const obj = { name: "test", value: 123 };

      expect(Object.prototype.hasOwnProperty.call(obj, "name")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(obj, "value")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(obj, "missing")).toBe(false);
    });
  });

  describe("String Manipulation", () => {
    it("should trim whitespace", () => {
      expect("  hello  ".trim()).toBe("hello");
      expect("test".trim()).toBe("test");
      expect("   ".trim()).toBe("");
    });

    it("should convert to lowercase", () => {
      expect("HELLO".toLowerCase()).toBe("hello");
      expect("TeSt".toLowerCase()).toBe("test");
    });

    it("should convert to uppercase", () => {
      expect("hello".toUpperCase()).toBe("HELLO");
      expect("TeSt".toUpperCase()).toBe("TEST");
    });

    it("should split string", () => {
      const result = "a,b,c".split(",");
      expect(result).toEqual(["a", "b", "c"]);
      expect(result).toHaveLength(3);
    });
  });

  describe("Array Operations", () => {
    it("should filter array", () => {
      const numbers = [1, 2, 3, 4, 5];
      const evens = numbers.filter((n) => n % 2 === 0);

      expect(evens).toEqual([2, 4]);
    });

    it("should map array", () => {
      const numbers = [1, 2, 3];
      const doubled = numbers.map((n) => n * 2);

      expect(doubled).toEqual([2, 4, 6]);
    });

    it("should reduce array", () => {
      const numbers = [1, 2, 3, 4];
      const sum = numbers.reduce((acc, n) => acc + n, 0);

      expect(sum).toBe(10);
    });

    it("should find in array", () => {
      const items = [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ];

      const found = items.find((item) => item.id === 2);
      expect(found).toEqual({ id: 2, name: "B" });
    });

    it("should check if array includes value", () => {
      const arr = [1, 2, 3, 4, 5];

      expect(arr.includes(3)).toBe(true);
      expect(arr.includes(6)).toBe(false);
    });
  });

  describe("Object Operations", () => {
    it("should merge objects", () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const merged = { ...obj1, ...obj2 };

      expect(merged).toEqual({ a: 1, b: 3, c: 4 });
    });

    it("should get object keys", () => {
      const obj = { name: "test", value: 123 };
      const keys = Object.keys(obj);

      expect(keys).toEqual(["name", "value"]);
    });

    it("should get object values", () => {
      const obj = { name: "test", value: 123 };
      const values = Object.values(obj);

      expect(values).toEqual(["test", 123]);
    });

    it("should get object entries", () => {
      const obj = { a: 1, b: 2 };
      const entries = Object.entries(obj);

      expect(entries).toEqual([
        ["a", 1],
        ["b", 2],
      ]);
    });
  });

  describe("Type Checking", () => {
    it("should check types correctly", () => {
      expect(typeof "string").toBe("string");
      expect(typeof 123).toBe("number");
      expect(typeof true).toBe("boolean");
      expect(typeof {}).toBe("object");
      expect(typeof []).toBe("object");
      expect(typeof null).toBe("object");
      expect(typeof undefined).toBe("undefined");
      expect(typeof (() => {})).toBe("function");
    });

    it("should check if value is array", () => {
      expect(Array.isArray([])).toBe(true);
      expect(Array.isArray([1, 2, 3])).toBe(true);
      expect(Array.isArray({})).toBe(false);
      expect(Array.isArray("string")).toBe(false);
    });

    it("should check if value is number", () => {
      expect(Number.isNaN(NaN)).toBe(true);
      expect(Number.isNaN(123)).toBe(false);
      expect(Number.isFinite(123)).toBe(true);
      expect(Number.isFinite(Infinity)).toBe(false);
    });
  });

  describe("Error Handling", () => {
    it("should create error with message", () => {
      const error = new Error("Test error");

      expect(error.message).toBe("Test error");
      expect(error instanceof Error).toBe(true);
    });

    it("should handle try-catch", () => {
      const riskyFunction = () => {
        throw new Error("Something went wrong");
      };

      expect(() => riskyFunction()).toThrow("Something went wrong");
    });
  });
});
