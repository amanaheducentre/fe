import { defineStore } from "pinia";

export const useWindowStore = defineStore("window", {
  state: () => {
    return {
      yPosition: 0,
      xPosition: 0,
      scrollDirection: false, // true = Up, false = Down
      scrollDirectionTimeout: 0.7,

      hashLocation: "",
    };
  },
  actions: {
    handleScroll(window: Window) {
      const lastPosition = this.yPosition;
      const currentPosition = window.scrollY || window.pageYOffset;

      this.scrollDirection = currentPosition < lastPosition;
      this.yPosition = currentPosition;

      this.scrollDirectionTimeout = 0.7;
    },
  },
});
