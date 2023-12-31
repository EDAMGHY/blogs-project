export const link = {
  base: "btn !border-none !rounded-none",
  variants: {
    default:
      "focus:border-none focus:outline-0 active:outline-0 active:border-0",
    permalink: `relative after:absolute after:content-[''] after:left-0 after:w-full after:h-[3px] text-primary after:bg-primary after:bottom-0 pb-1 overflow-hidden hover:after:translate-x-0 after:translate-x-full after:transition-all after:duration-700`,
    "permalink-v2": `relative after:absolute after:content-[''] after:left-0 after:w-full after:h-[3px] text-secondary after:bg-secondary after:bottom-0 pb-1 overflow-hidden hover:after:translate-x-0 after:translate-x-full after:transition-all after:duration-700`,
  },
};
