import { FC } from "react";
import Vector, { VectorProps } from "../../../common/components/vector/vector";

export type SocialNetworkProps = VectorProps & {
  href: string;
};

const SocialNetwork: FC<SocialNetworkProps> = ({ alt, href, src }) => {
  return (
    <a href={href} target="_blank">
      <Vector alt={alt} src={src} />
    </a>
  );
};

export default SocialNetwork;
