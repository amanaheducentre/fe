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
    async getCourseList() {
      const { data, error } = await useFetch("/api/course/list");
      if (error.value) {
        throw error;
      }

      this.raw = data.value!;
      return this.raw;
    },
    async getCourseByCategory() {
      await this.getCourseList();
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
