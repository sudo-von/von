import { FC } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import Icon, { IconProps } from "@common/components/icon/icon";

type LoaderProps = Pick<IconProps, "color">;

const Loader: FC<LoaderProps> = ({ color }) => {
  return (
    <div className="animate-spin">
      <Icon icon={AiOutlineLoading} color={color} />
    </div>
  );
};

export default Loader;
