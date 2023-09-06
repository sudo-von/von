import { ElementType, FC } from "react";
import { iconColor } from "@common/components/icon/icon.data";
import { IconColor } from "@common/components/icon/icon.types";

export type IconProps = {
  color: IconColor;
  icon: ElementType;
  onClick?: VoidFunction;
};

const Icon: FC<IconProps> = ({ color, icon, onClick }) => {
  const Component = icon;

  const className = `${iconColor[color]} text-2xl`;

  return <Component className={className} onClick={onClick} />;
};

export default Icon;
