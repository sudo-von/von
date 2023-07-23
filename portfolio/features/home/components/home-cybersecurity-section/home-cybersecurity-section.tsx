import { FC } from "react";
import HomeVideo from "../home-video/home-video";
import HomeSection from "../home-section/home-section";
import HomeSectionLayout from "../../layouts/home-section-layout/home-section-layout";

type HomeCybersecuritySectionProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const HomeCybersecuritySection: FC<HomeCybersecuritySectionProps> = ({
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
      <HomeVideo
        title={title}
        src="https://www.youtube.com/embed/81H41vp96ag"
      />
    </HomeSectionLayout>
  );
};

export default HomeCybersecuritySection;
