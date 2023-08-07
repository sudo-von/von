import { FC } from "react";
import Img from "../../../../../common/components/img/img";

type AskAvatarProps = {
  alt: string;
  src: string;
};

const AskAvatar: FC<AskAvatarProps> = ({ alt, src }) => {
  return <Img alt={alt} src={src} rounded="full" />;
};

export default AskAvatar;
