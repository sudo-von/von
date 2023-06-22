import Image from "next/image";
import { FC } from "react";

type Props = {
  alt: string;
  url: string;
};

const ProfilePicture: FC<Props> = ({ alt, url }) => {
  return (
    <div className="w-40 h-40 relative">
      <Image
        className="object-cover rounded-md"
        src={url}
        fill={true}
        alt={alt}
      />
    </div>
  );
};

export default ProfilePicture;
