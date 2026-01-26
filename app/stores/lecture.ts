import { defineStore } from "pinia";
import type { LectureDataRes } from "~~/shared/types/lecture.schema";

export const useLectureStore = defineStore("lecture", {
  state: () => {
    return {
      lastLectureId: undefined as undefined | string,
      lectures: {} as Record<string, LectureDataRes["data"]>,
      lecture: {} as LectureDataRes["data"],
    };
  },
  actions: {
    setLastLectureId(lectureId: string) {
      this.lastLectureId = lectureId;
    },

    async getLecture(lectureId: string) {
      if (this.lectures[lectureId]) {
        this.lecture = this.lectures[lectureId];
      } else {
        const { data } = await useFetch<LectureDataRes["data"]>("/api/lecture?lectureId=" + lectureId);

        if (data) {
          this.lecture = data.value!;
          this.lectures[lectureId] = this.lecture;
        }
      }

      return this.lecture;
    },
  },
});
