import SectionDescription from "../../features/home/components/section/components/section-description/section-description";
import SectionSubtitle from "../../features/home/components/section/components/section-subtitle/section-subtitle";
import SectionTitle from "../../features/home/components/section/components/section-title/section-title";
import Vector from "../vector/vector";

const Footer = () => {
  return (
    <footer className="grid lg:grid-cols-2">
      <div className="flex flex-col gap-8">
        <SectionTitle>Jesús Rodríguez</SectionTitle>
        <SectionSubtitle>Software engineer</SectionSubtitle>
        <SectionDescription>
          Passionate about ethical hacking
        </SectionDescription>
        <div className="flex flex-row gap-4">
          <div className="relative w-10 h-10 ">
            <Vector
              src="/svg/social-networks/linkedin.svg"
              alt="curriculum-vitae"
            />
          </div>
          <div className="relative w-10 h-10 ">
            <Vector
              src="/svg/social-networks/github.svg"
              alt="curriculum-vitae"
            />
          </div>
          <div className="relative w-10 h-10 ">
            <Vector
              src="/svg/social-networks/spotify.svg"
              alt="curriculum-vitae"
            />
          </div>
          <div className="relative w-10 h-10 ">
            <Vector
              src="/svg/social-networks/email.svg"
              alt="curriculum-vitae"
            />
          </div>
          <div className="relative w-10 h-10 ">
            <Vector src="/svg/social-networks/cv.svg" alt="curriculum-vitae" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end">
        <SectionDescription>
          All rights reserved © Jesús Rodríguez 2023.
        </SectionDescription>
      </div>
    </footer>
  );
};

export default Footer;
