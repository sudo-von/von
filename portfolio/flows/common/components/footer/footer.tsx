import { FooterLinkProps } from "./components/footer-link/footer-link";
import FooterTitle from "./components/footer-title/footer-title";
import FooterSubtitle from "./components/footer-subtitle/footer-subtitle";
import FooterLinkList from "./components/footer-link-list/footer-link-list";
import FooterCopyright from "./components/footer-copyright/footer-copyright";
import FooterDescription from "./components/footer-description/footer-description";
import { profile } from "console";
import { user } from "../../../home/data/profile-data";
import Title from "../../../home/components/section/components/title/title";
import Subtitle from "../subtitle/subtitle";
import Description from "../description/description";

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
      <div className="flex flex-col gap-4 mt-1">
        <Title>Contact</Title>
        <Subtitle>Let's connect.{"\n"}Let's create together</Subtitle>
        <Description>
          Get in touch with me for any inquiries,{"\n"}collaborations, or just
          to say hello!{"\n"}I'm always excited to connect.{"\n"}Feel free to
          drop me a message,{"\n"}and I'll get back to you as soon as possible.
        </Description>
      </div>
      <div className="flex flex-row justify-center items-center lg:justify-end lg:items-end">
        <FooterCopyright name="Jesús Rodríguez" year={currentYear} />
      </div>
    </footer>
  );
};

export default Footer;
