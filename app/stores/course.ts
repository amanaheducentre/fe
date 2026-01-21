import { defineStore } from "pinia";
import type {
  CourseData,
  CourseWithTagsData,
  ListCourseRes,
  ListCourseByCategory,
} from "~~/shared/types/course.schema";

type ExtendedRaw = ListCourseRes["data"] & {
  items: Array<ListCourseRes["data"]["items"][number] & CourseWithTagsData>;
};

export const useCourseStore = defineStore("course", {
  state: () => {
    return {
      selected: {} as CourseData,
      raw: {} as ExtendedRaw,
      listByCategory: [{}] as ListCourseByCategory[],
    };
  },
  actions: {
    selectCourse(id: string) {
      for (const course of this.raw.items) {
        if (course.id == id) {
          this.selected = course;
          break;
        }
      }
    },
    async getCourseList(page: number = 1, pageSize: number = 10, q?: string, categoryId?: string) {
      const { data, error } = await useFetch("/api/course/list", {
        method: "GET",
        query: {
          page: page.toString(),
          pageSize: pageSize.toString(),
          ...(q && { q }),
          ...(categoryId && { categoryId }),
        },
      });

      if (error.value) {
        throw error;
      }

      this.raw = data.value!;
      return this.raw;
    },
    async getCourseByCategory(page: number = 1, pageSize: number = 10, q?: string, categoryId?: string) {
      await this.getCourseList(page, pageSize, q, categoryId);
      this.listByCategory = [];
      const data = this.raw?.items;

      if (!data) {
        return [];
      }

      const categories = Array.from(new Set(data.map((item) => item.category?.name)));

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        this.listByCategory.push({
          id: i + 1,
          tag: categories[i]!,
          courses: data.filter((item) => item.category?.name === category) as CourseWithTagsData[],
        });
      }

      return this.listByCategory;
    },
  },
});
