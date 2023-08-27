import {
  LabelSize,
  LabelColor,
  LabelOption,
  LabelWeight,
  LabelSpacing,
} from "./label.types";

export const labelColor: LabelOption<LabelColor> = {
  error: "text-red-150",
  normal: "text-slate-550",
};

export const labelSize: LabelOption<LabelSize> = {
  small: "text-sm",
  tiny: "text-xs",
};

export const labelSpacing: LabelOption<LabelSpacing> = {
  wide: "tracking-wide",
};

export const labelWeight: LabelOption<LabelWeight> = {
  light: "font-light",
};
