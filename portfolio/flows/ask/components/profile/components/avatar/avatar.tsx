import { FC } from "react";
import Img, { ImgProps } from "../../../../../common/components/img/img";

export type AvatarProps = Omit<ImgProps, "rounded">;

const Avatar: FC<AvatarProps> = ({ alt, src, onClick }) => {
  return (
    <div className="relative w-32 h-32">
      <Img alt={alt} onClick={onClick} rounded="lg" src={src} />
    </div>
  );
};

export default Avatar;
