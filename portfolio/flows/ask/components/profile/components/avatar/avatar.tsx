import { FC } from "react";
import Img, { ImgProps } from "../../../../../common/components/img/img";

export type AvatarProps = Omit<ImgProps, "onClick" | "rounded">;

const Avatar: FC<AvatarProps> = ({ alt, src }) => {
  return (
    <div className="relative w-32 h-32">
      <Img alt={alt} rounded="lg" src={src} />
    </div>
  );
};

export default Avatar;
