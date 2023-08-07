import React, { FC } from "react";
import FooterLink, { FooterLinkProps } from "../footer-link/footer-link";
import Vector from "../../../vector/vector";

export type FooterLinkListProps = {
  links: FooterLinkProps[];
};

const FooterLinkList: FC<FooterLinkListProps> = ({ links }) => {
  return (
    <>
      {links.map(({ alt, src, href }) => (
        <div
          key={src}
          className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
        >
          <Vector alt={alt} src={`/svg/social-networks/${src}`} />
        </div>
      ))}
    </>
  );
};

export default FooterLinkList;
