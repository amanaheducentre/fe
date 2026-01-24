import { describe, expect, it } from "vitest";

/**
 * Example unit tests
 * Demonstrates basic Vitest testing patterns
 */

describe("Basic Math Operations", () => {
  it("should add numbers correctly", () => {
    expect(1 + 1).toBe(2);
    expect(5 + 3).toBe(8);
  });

  it("should multiply numbers correctly", () => {
    expect(2 * 3).toBe(6);
    expect(5 * 4).toBe(20);
  });

  it("should handle floating point", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });
});

describe("String Operations", () => {
  it("should concatenate strings", () => {
    expect("Hello" + " " + "World").toBe("Hello World");
  });

  it("should convert to uppercase", () => {
    expect("hello".toUpperCase()).toBe("HELLO");
  });

  it("should check string contains", () => {
    expect("Hello World").toContain("World");
  });
});

describe("Array Operations", () => {
  it("should have correct length", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).toHaveLength(5);
  });

  it("should include value", () => {
    const arr = ["apple", "banana", "orange"];
    expect(arr).toContain("banana");
  });

  it("should filter correctly", () => {
    const numbers = [1, 2, 3, 4, 5];
    const evens = numbers.filter((n) => n % 2 === 0);
    expect(evens).toEqual([2, 4]);
  });
});

describe("Object Operations", () => {
  it("should have properties", () => {
    const obj = { name: "Test", value: 123 };
    expect(obj).toHaveProperty("name");
    expect(obj).toHaveProperty("value");
  });

  it("should match object", () => {
    const obj = { name: "Test", active: true };
    expect(obj).toMatchObject({ name: "Test" });
  });

  it("should deep equal", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(obj1).toEqual(obj2);
  });
});

describe("Boolean Operations", () => {
  it("should be truthy", () => {
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect("string").toBeTruthy();
  });

  it("should be falsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
  });
});

describe("Error Handling", () => {
  it("should throw error", () => {
    const throwError = () => {
      throw new Error("Test error");
    };

    expect(throwError).toThrow("Test error");
  });

  it("should not throw", () => {
    const safeFunction = () => {
      return "success";
    };

    expect(safeFunction).not.toThrow();
  });
});

describe("Type Checking", () => {
  it("should check types", () => {
    expect(typeof "string").toBe("string");
    expect(typeof 123).toBe("number");
    expect(typeof true).toBe("boolean");
    expect(typeof {}).toBe("object");
    expect(Array.isArray([])).toBe(true);
  });

  it("should check null and undefined", () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(null).not.toBeUndefined();
    expect(undefined).not.toBeNull();
  });
});
