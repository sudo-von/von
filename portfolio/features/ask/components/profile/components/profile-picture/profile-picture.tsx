import { FC } from "react";
import Img, { ImgProps } from "../../../../../common/components/img/img";

type ProfilePictureProps = Omit<ImgProps, "rounded">;

const ProfilePicture: FC<ProfilePictureProps> = ({ alt, src, onClick }) => {
  return (
    <div className="relative w-44 h-44">
      <Img alt={alt} onClick={onClick} src={src} rounded="full" />
    </div>
  );
};

export default ProfilePicture;
