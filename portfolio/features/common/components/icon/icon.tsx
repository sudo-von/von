import { ElementType, FC } from "react";
import { iconColor } from "./icon.data";
import { IconColor } from "./icon.types";

type IconProps = {
  color: IconColor;
  icon: ElementType;
};

const Icon: FC<IconProps> = ({ color, icon }) => {
  const Component = icon;

  const className = `${iconColor[color]} text-2xl`;

  return <Component className={className} />;
};

export default Icon;
