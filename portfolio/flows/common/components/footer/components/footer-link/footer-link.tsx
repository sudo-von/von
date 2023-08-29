import { FC } from "react";
import Vector, { VectorProps } from "../../../vector/vector";

export type FooterLinkProps = VectorProps & {
  href: string;
};

const FooterLink: FC<FooterLinkProps> = ({ alt, src, href }) => {
  return (
    <a href={href} target="_blank">
      <Vector alt={alt} src={src} />
    </a>
  );
};

export default FooterLink;
