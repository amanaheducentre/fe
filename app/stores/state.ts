import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => {
    return {
      loginOpen: false,
    };
  },
  actions: {
    async doLogin() {
      const { loggedIn } = useUserSession();

      if (loggedIn.value) {
        await navigateTo("/lms", {
          external: true,
        });
      } else {
        this.loginOpen = true;
      }

      return;
    },
  },
});
