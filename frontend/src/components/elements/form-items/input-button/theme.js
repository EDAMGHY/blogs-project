export const inputButton = {
  default: {
    wrapper: "relative w-full mb-4",
    label: "inline-block mb-2 font-sans capitalize text-primary",
    input_wrapper: {
      wrapper: "flex flex-col gap-2 w-full",
      container:
        "w-full flex transition-all duration-300 focus-within:outline-primary outline focus-within:outline-offset-[2.5px] outline-offset-0 outline-2 outline-transparent",
      button:
        "bg-primary text-secondary px-3 border-y-2 border-r-2 border-primary inline-flex gap-2 items-center justify-center",
      input: {
        base: "w-full bg-secondary text-primary border-2 border-primary px-3 py-2 focus:outline-0 placeholder:capitalize placeholder:font-light placeholder:text-primary",
        disabled: "!bg-black/20 cursor-not-allowed",
        errorMessage:
          "absolute -bottom-5 left-0 text-error text-xs font-normal inline-block",
      },
    },
  },
  underline: {
    wrapper: "relative w-full mb-4",
    label: "inline-block mb-2 font-sans capitalize text-primary",
    input_wrapper: {
      disabled: "!bg-black/20",

      container: "w-full flex",
      button:
        "bg-primary text-secondary px-3 border-2 border-primary inline-flex gap-2 items-center justify-center",
      wrapper: "flex flex-col gap-2 w-full",
      input: {
        base: "w-full bg-secondary text-primary border-b-2 border-t-2 border-l-2 border-b-primary border-l-transparent border-t-transparent px-3 py-2 transition-all duration-300 focus:border-t-primary focus:border-l-primary focus:outline-0 placeholder:capitalize placeholder:font-light placeholder:text-primary",
        disabled: "!bg-black/20 cursor-not-allowed",
        errorMessage:
          "absolute -bottom-5 left-0 text-error text-xs font-normal inline-block",
      },
    },
  },
  transparent: {
    wrapper: "relative w-full mb-4",
    label: "inline-block mb-2 font-sans capitalize text-primary",

    input_wrapper: {
      disabled: "!bg-black/20",
      container: "w-full flex",
      button:
        "bg-primary text-secondary px-3 border-y-2 border-r-2 border-primary inline-flex gap-2 items-center justify-center",
      wrapper: "flex flex-col gap-2 w-full",
      input: {
        base: "w-full bg-transparent text-inherit border-b-2 border-b-primary border-t-transparent border-x-transparent px-3 py-2 transition-all duration-300 focus:bg-secondary focus:outline-0 placeholder:capitalize placeholder:font-light placeholder:text-primary",
        disabled: "!bg-black/20 cursor-not-allowed",
        errorMessage:
          "absolute -bottom-5 left-0 text-error text-xs font-normal inline-block",
      },
    },
  },
};
