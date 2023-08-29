import { ElementType } from "react";

export type AlertVariant =
  | "error"
  | "success";

export type AlertVariants = {
  [variant in AlertVariant]: {
    color: variant;
    icon: ElementType;
  };
};
