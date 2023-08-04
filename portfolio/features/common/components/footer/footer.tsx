import { FooterLinkProps } from "./components/footer-link/footer-link";
import FooterTitle from "./components/footer-title/footer-title";
import FooterSubtitle from "./components/footer-subtitle/footer-subtitle";
import FooterLinkList from "./components/footer-link-list/footer-link-list";
import FooterCopyright from "./components/footer-copyright/footer-copyright";
import FooterDescription from "./components/footer-description/footer-description";

export const links: FooterLinkProps[] = [
  {
    alt: "linkedin",
    src: "linkedin.svg",
    href: "https://www.linkedin.com/in/jesus-angel-rodriguez-martinez/",
  },
  {
    alt: "github",
    src: "github.svg",
    href: "https://github.com/sudo-von",
  },
  {
    alt: "spotify",
    src: "spotify.svg",
    href: "https://open.spotify.com/user/mq7i4ip2xbf7m8ar1xe6ogtlo",
  },
  {
    alt: "email",
    src: "email.svg",
    href: "mailto:sudo.von.contact@gmail.com?Subject=Hey%20Jesús%21%20I%20want%20to%20help%20you%20fulfill%20your%20dream%20🇨🇦",
  },
  {
    alt: "cv",
    src: "cv.svg",
    href: "mailto:sudo.von.contact@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="grid lg:grid-cols-2 gap-4">
      <div className="flex flex-col items-center lg:items-start justify-center gap-3 text-center md:text-start">
        <FooterTitle>Jesús Rodríguez</FooterTitle>
        <FooterSubtitle>Help others achieve their dreams.</FooterSubtitle>
        <FooterDescription>
          By doing so, you will achieve yours.
        </FooterDescription>
        <div className="flex flex-row gap-4 mt-1">
          <FooterLinkList links={links} />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center lg:justify-end lg:items-end">
        <FooterCopyright name="Jesús Rodríguez" year={currentYear} />
      </div>
    </footer>
  );
};

export default Footer;
