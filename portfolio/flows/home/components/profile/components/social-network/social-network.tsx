import { FC } from "react";
import Anchor from "../../../../../common/components/anchor/anchor";
import Vector, { VectorProps } from "../../../../../common/components/vector/vector";

export type SocialNetworkProps = VectorProps & {
  href: string;
};

const SocialNetwork: FC<SocialNetworkProps> = ({ alt, href, src }) => {
  return (
    <Anchor href={href} target="_blank">
      <Vector alt={alt} src={src} />
    </Anchor>
  );
};

export default SocialNetwork;
