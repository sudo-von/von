import { FC } from "react";
import HomeVideo from "../home-video/home-video";
import HomeSection from "../home-section/home-section";
import HomeSectionLayout from "../../layouts/home-section-layout/home-section-layout";

type HomeAboutProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const HomeAboutSection: FC<HomeAboutProps> = ({
  src,
  title,
  subtitle,
  description,
}) => {
  return (
    <HomeSectionLayout>
      <HomeSection
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <HomeVideo src={src} title={title} />
    </HomeSectionLayout>
  );
};

export default HomeAboutSection;
