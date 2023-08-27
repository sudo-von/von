import { FC } from "react";
import Img, { ImgProps } from "../../../../../common/components/img/img";

export type ProfileAvatarProps = Omit<ImgProps, "rounded">;

const ProfileAvatar: FC<ProfileAvatarProps> = ({ alt, src, onClick }) => {
  return (
    <div className="relative w-40 h-40">
      <Img alt={alt} onClick={onClick} src={src} rounded="full" />
    </div>
  );
};

export default ProfileAvatar;
