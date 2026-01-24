import { describe, it, expect } from "vitest";

/**
 * Integration tests for TypeScript type definitions
 * Testing type safety and type inference
 */

describe("TypeScript Types", () => {
  describe("Course Types", () => {
    it("should validate course data structure", () => {
      type CourseData = {
        id: string;
        title: string;
        price: number;
        sold: number;
        star: number;
        rating: number;
        tags?: string[];
      };

      const course: CourseData = {
        id: "course-1",
        title: "TypeScript Basics",
        price: 150000,
        sold: 50,
        star: 4.5,
        rating: 30,
        tags: ["Programming", "TypeScript"],
      };

      expect(course.id).toBe("course-1");
      expect(course.title).toBe("TypeScript Basics");
      expect(course.tags).toContain("TypeScript");
    });

    it("should allow optional properties", () => {
      type CourseData = {
        id: string;
        title: string;
        tags?: string[];
      };

      const courseWithoutTags: CourseData = {
        id: "course-2",
        title: "Course without tags",
      };

      expect(courseWithoutTags.tags).toBeUndefined();
    });
  });

  describe("API Response Types", () => {
    it("should define paginated response type", () => {
      type PaginatedResponse<T> = {
        data: {
          items: T[];
          total: number;
          page: number;
          pageSize: number;
        };
      };

      type Course = { id: string; title: string };

      const response: PaginatedResponse<Course> = {
        data: {
          items: [
            { id: "1", title: "Course 1" },
            { id: "2", title: "Course 2" },
          ],
          total: 2,
          page: 1,
          pageSize: 10,
        },
      };

      expect(response.data.items).toHaveLength(2);
      expect(response.data.total).toBe(2);
    });

    it("should define error response type", () => {
      type ErrorResponse = {
        error: {
          message: string;
          code: string;
          statusCode: number;
        };
      };

      const errorResponse: ErrorResponse = {
        error: {
          message: "Not found",
          code: "NOT_FOUND",
          statusCode: 404,
        },
      };

      expect(errorResponse.error.statusCode).toBe(404);
    });
  });

  describe("Union Types", () => {
    it("should handle union types", () => {
      type Status = "pending" | "success" | "error";

      const successStatus: Status = "success";
      const pendingStatus: Status = "pending";

      expect(successStatus).toBe("success");
      expect(pendingStatus).toBe("pending");
    });

    it("should work with discriminated unions", () => {
      type Result<T> = { success: true; data: T } | { success: false; error: string };

      const successResult: Result<number> = {
        success: true,
        data: 42,
      };

      const errorResult: Result<number> = {
        success: false,
        error: "Failed to fetch",
      };

      expect(successResult.success).toBe(true);
      if (successResult.success) {
        expect(successResult.data).toBe(42);
      }

      expect(errorResult.success).toBe(false);
      if (!errorResult.success) {
        expect(errorResult.error).toBe("Failed to fetch");
      }
    });
  });

  describe("Generic Types", () => {
    it("should work with generic functions", () => {
      function identity<T>(value: T): T {
        return value;
      }

      const numberResult = identity(123);
      const stringResult = identity("hello");
      const objectResult = identity({ id: 1 });

      expect(numberResult).toBe(123);
      expect(stringResult).toBe("hello");
      expect(objectResult).toEqual({ id: 1 });
    });

    it("should work with generic interfaces", () => {
      interface Container<T> {
        value: T;
        getValue: () => T;
      }

      const numberContainer: Container<number> = {
        value: 42,
        getValue: function () {
          return this.value;
        },
      };

      expect(numberContainer.getValue()).toBe(42);
    });
  });

  describe("Type Guards", () => {
    it("should narrow types with typeof", () => {
      function processValue(value: string | number): string {
        if (typeof value === "string") {
          return value.toUpperCase();
        }
        return value.toString();
      }

      expect(processValue("hello")).toBe("HELLO");
      expect(processValue(123)).toBe("123");
    });

    it("should narrow types with custom type guard", () => {
      interface User {
        type: "user";
        name: string;
      }

      interface Admin {
        type: "admin";
        name: string;
        permissions: string[];
      }

      function isAdmin(user: User | Admin): user is Admin {
        return user.type === "admin";
      }

      const admin: Admin = {
        type: "admin",
        name: "Admin User",
        permissions: ["read", "write"],
      };

      expect(isAdmin(admin)).toBe(true);
      if (isAdmin(admin)) {
        expect(admin.permissions).toContain("read");
      }
    });
  });

  describe("Utility Types", () => {
    it("should use Partial utility type", () => {
      interface Course {
        id: string;
        title: string;
        price: number;
      }

      type PartialCourse = Partial<Course>;

      const partialCourse: PartialCourse = {
        title: "Partial Course",
      };

      expect(partialCourse.title).toBe("Partial Course");
      expect(partialCourse.id).toBeUndefined();
    });

    it("should use Pick utility type", () => {
      interface Course {
        id: string;
        title: string;
        price: number;
        description: string;
      }

      type CoursePreview = Pick<Course, "id" | "title">;

      const preview: CoursePreview = {
        id: "course-1",
        title: "Course Title",
      };

      expect(preview.id).toBe("course-1");
      expect(preview.title).toBe("Course Title");
    });

    it("should use Omit utility type", () => {
      interface Course {
        id: string;
        title: string;
        internalNotes: string;
      }

      type PublicCourse = Omit<Course, "internalNotes">;

      const publicCourse: PublicCourse = {
        id: "course-1",
        title: "Public Course",
      };

      expect(publicCourse.id).toBe("course-1");
    });

    it("should use Record utility type", () => {
      type CourseMap = Record<string, { title: string; price: number }>;

      const courses: CourseMap = {
        "course-1": { title: "Course 1", price: 100000 },
        "course-2": { title: "Course 2", price: 200000 },
      };

      expect(courses["course-1"].title).toBe("Course 1");
      expect(courses["course-2"].price).toBe(200000);
    });
  });
});
