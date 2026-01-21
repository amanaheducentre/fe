export default defineAppConfig({
  ui: {
    drawer: {
      slots: {
        overlay: "backdrop-blur-xs",
      },
    },
    accordion: {
      slots: {
        header: "bg-gray-200 rounded-md px-4 my-1",
        label: "font-black text-purple-500",
      },
    },
  },
});
