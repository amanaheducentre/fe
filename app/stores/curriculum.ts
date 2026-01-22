import { defineStore } from "pinia";
import type { CourseCurriculumWithLectures } from "~~/shared/types/course.schema";

export const useCurriculumStore = defineStore("curriculum", {
  state: () => {
    return {
      raw: {} as CourseCurriculumWithLectures["data"],
    };
  },
  actions: {
    setCurriculum(curriculum: CourseCurriculumWithLectures["data"]) {
      this.raw = curriculum;
    },
  },
});
