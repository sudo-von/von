export type ImgRounded = "xs" | "sm" | "md" | "lg" | "full"; 

export type ImgOptions = {
  rounded: {
    [key in ImgRounded]: string;
  };
};
