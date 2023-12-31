export const button = {
  base: "btn",
  disabled: "opacity-60 cursor-not-allowed !outline-none hover:!outline-none",
  pill: "!rounded-full",
  size: {
    small: "text-sm px-4 py-2",
    normal: "text-base  px-6 py-2.5",
    large: "text-lg px-8 py-4",
    xlarge: "text-xl  px-10 py-5",
    icon: "px-4 py-4",
  },
  variants: {
    custom: "",
    primary:
      "bg-primary border-primary text-secondary hover:outline-primary outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
    secondary:
      "bg-secondary border-secondary text-primary hover:outline-secondary outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
    success:
      "bg-success border-success text-white hover:outline-success outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
    warning:
      "bg-warning border-warning text-white hover:outline-warning outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
    info: "bg-info border-info text-white hover:outline-info outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
    error:
      "bg-error border-error text-white hover:outline-error outline hover:outline-offset-4 outline-offset-0 outline-2 outline-transparent",
  },
  outlineVariants: {
    primary:
      "bg-transparent border-primary text-primary hover:bg-primary hover:text-secondary",
    secondary:
      "bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary",
    success:
      "bg-transparent border-success text-success hover:bg-success hover:text-white",
    error:
      "bg-transparent border-error text-error hover:bg-error hover:text-white",
    info: "bg-transparent border-info text-info hover:bg-info hover:text-white",
    warning:
      "bg-transparent border-warning text-warning hover:bg-warning hover:text-white",
    disabled: {
      primary: "hover:!bg-transparent hover:!text-primary",
      secondary: "hover:!bg-transparent hover:!text-secondary",
      success: "hover:!bg-transparent hover:!text-success",
      error: "hover:!bg-transparent hover:!text-error",
      info: "hover:!bg-transparent hover:!text-info",
      warning: "hover:!bg-transparent hover:!text-warning",
    },
  },
};
