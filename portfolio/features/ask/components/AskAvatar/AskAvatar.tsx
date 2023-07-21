import { FC } from "react";
import Image from "next/image";

type AskAvatarProps = {
  alt: string;
  src: string;
};

const AskAvatar: FC<AskAvatarProps> = ({ alt, src }) => {
  return (
    <Image className="object-cover rounded-full" alt={alt} src={src} fill />
  );
};

export default AskAvatar;
