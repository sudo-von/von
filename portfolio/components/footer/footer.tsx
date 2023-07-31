import SectionDescription from "../../features/home/components/section/components/section-description/section-description";
import SectionSubtitle from "../../features/home/components/section/components/section-subtitle/section-subtitle";
import SectionTitle from "../../features/home/components/section/components/section-title/section-title";

const Footer = () => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <SectionTitle>Jesús Rodríguez</SectionTitle>
        <SectionSubtitle>Software engineer</SectionSubtitle>
        <SectionDescription>
          Passionate about ethical hacking
        </SectionDescription>
      </div>
      <div className="flex flex-row justify-end items-end">
        <SectionDescription>
          All rights reserved © Jesús Rodríguez 2023.
        </SectionDescription>
      </div>
    </div>
  );
};

export default Footer;
