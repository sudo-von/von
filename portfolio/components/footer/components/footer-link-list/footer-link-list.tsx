import React, { FC } from "react";
import FooterLink, { FooterLinkProps } from "../footer-link/footer-link";

export type FooterLinkListProps = {
  links: FooterLinkProps[];
};

const FooterLinkList: FC<FooterLinkListProps> = ({ links }) => {
  return (
    <>
      {links.map(({ alt, src, href }) => (
        <div
          key={src}
          className="relative w-10 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-16 h-10 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-16"
        >
          <FooterLink
            alt={alt}
            href={href}
            src={`/svg/social-networks/${src}`}
          />
        </div>
      ))}
    </>
  );
};

export default FooterLinkList;
