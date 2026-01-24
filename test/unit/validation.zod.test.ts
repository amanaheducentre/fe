import { describe, it, expect } from "vitest";
import { z } from "zod";

/**
 * Unit tests for Zod validation schemas
 * Testing input validation patterns used throughout the application
 */

describe("Zod Validation Schemas", () => {
  describe("Authentication Schemas", () => {
    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
    });

    it("should validate correct login credentials", () => {
      const validData = {
        email: "user@example.com",
        password: "password123",
      };

      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email format", () => {
      const invalidData = {
        email: "invalid-email",
        password: "password123",
      };

      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject short password", () => {
      const invalidData = {
        email: "user@example.com",
        password: "short",
      };

      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject missing fields", () => {
      const invalidData = {
        email: "user@example.com",
      };

      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe("Query Parameter Schemas", () => {
    const querySchema = z.object({
      page: z.string().optional(),
      pageSize: z.string().optional(),
      q: z.string().optional(),
      categoryId: z.string().optional(),
    });

    it("should validate query with all parameters", () => {
      const validQuery = {
        page: "1",
        pageSize: "10",
        q: "search term",
        categoryId: "cat-123",
      };

      const result = querySchema.safeParse(validQuery);
      expect(result.success).toBe(true);
    });

    it("should validate query with no parameters", () => {
      const emptyQuery = {};

      const result = querySchema.safeParse(emptyQuery);
      expect(result.success).toBe(true);
    });

    it("should validate query with some parameters", () => {
      const partialQuery = {
        page: "2",
        q: "test",
      };

      const result = querySchema.safeParse(partialQuery);
      expect(result.success).toBe(true);
    });
  });

  describe("Course Data Schemas", () => {
    const courseSchema = z.object({
      id: z.string(),
      title: z.string().min(1),
      price: z.number().nonnegative(),
      sold: z.number().int().nonnegative(),
      star: z.number().min(0).max(5),
      rating: z.number().int().nonnegative(),
    });

    it("should validate correct course data", () => {
      const validCourse = {
        id: "course-123",
        title: "Introduction to Programming",
        price: 200000,
        sold: 142,
        star: 4.5,
        rating: 121,
      };

      const result = courseSchema.safeParse(validCourse);
      expect(result.success).toBe(true);
    });

    it("should reject negative price", () => {
      const invalidCourse = {
        id: "course-123",
        title: "Course",
        price: -100,
        sold: 0,
        star: 4,
        rating: 0,
      };

      const result = courseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });

    it("should reject invalid star rating", () => {
      const invalidCourse = {
        id: "course-123",
        title: "Course",
        price: 100000,
        sold: 10,
        star: 6, // Invalid: max is 5
        rating: 50,
      };

      const result = courseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });

    it("should reject empty title", () => {
      const invalidCourse = {
        id: "course-123",
        title: "",
        price: 100000,
        sold: 10,
        star: 4,
        rating: 50,
      };

      const result = courseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });
  });

  describe("Pagination Schemas", () => {
    const paginationSchema = z.object({
      page: z.number().int().positive(),
      pageSize: z.number().int().positive().max(100),
      total: z.number().int().nonnegative(),
    });

    it("should validate correct pagination data", () => {
      const validPagination = {
        page: 1,
        pageSize: 10,
        total: 100,
      };

      const result = paginationSchema.safeParse(validPagination);
      expect(result.success).toBe(true);
    });

    it("should reject page size exceeding limit", () => {
      const invalidPagination = {
        page: 1,
        pageSize: 150, // Exceeds max of 100
        total: 1000,
      };

      const result = paginationSchema.safeParse(invalidPagination);
      expect(result.success).toBe(false);
    });

    it("should reject zero or negative page number", () => {
      const invalidPagination = {
        page: 0,
        pageSize: 10,
        total: 100,
      };

      const result = paginationSchema.safeParse(invalidPagination);
      expect(result.success).toBe(false);
    });
  });

  describe("Transformation and Coercion", () => {
    const numberSchema = z.string().transform((val) => parseInt(val, 10));

    it("should transform string to number", () => {
      const result = numberSchema.parse("123");
      expect(result).toBe(123);
      expect(typeof result).toBe("number");
    });

    const booleanSchema = z.string().transform((val) => val === "true");

    it("should transform string to boolean", () => {
      const resultTrue = booleanSchema.parse("true");
      expect(resultTrue).toBe(true);

      const resultFalse = booleanSchema.parse("false");
      expect(resultFalse).toBe(false);
    });
  });

  describe("Custom Validation Rules", () => {
    const emailDomainSchema = z
      .string()
      .email()
      .refine((email) => email.endsWith("@example.com"), {
        message: "Email must be from example.com domain",
      });

    it("should validate email with correct domain", () => {
      const result = emailDomainSchema.safeParse("user@example.com");
      expect(result.success).toBe(true);
    });

    it("should reject email with wrong domain", () => {
      const result = emailDomainSchema.safeParse("user@other.com");
      expect(result.success).toBe(false);
    });
  });
});
