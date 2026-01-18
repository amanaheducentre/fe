export default defineAppConfig({
  ui: {
    colors: {
      primary: "sky",
      neutral: "zinc",
    },
    drawer: {
      slots: {
        overlay: "backdrop-blur-xs",
      },
    },
    button: {
      compoundVariants: [
        {
          color: "neutral",
          variant: "solid",
          class:
            "hover:text-inverted hover:bg-inverted/65 active:bg-raka-orange disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted",
        },
      ],
    },
    accordion: {
      slots: {
        header: "bg-gray-200 rounded-md px-4 my-1",
        label: "font-black text-purple-500",
      },
    },
  },
});
