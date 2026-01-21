import { defineStore } from "pinia";

export const useLectureStore = defineStore("lectures", {
  state: () => {
    return {};
  },
  actions: {
    getLectures() {
      const key = useCookie("user-token");
    },
  },
});
