import { FC } from "react";
import HomeTitle from "./components/home-title/home-title";
import HomeSubtitle from "./components/home-subtitle/home-subtitle";
import HomeDescription from "./components/home-description/home-description";

type HomeSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const HomeSection: FC<HomeSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center text-center lg:text-start gap-8">
      <HomeTitle>{title}</HomeTitle>
      <HomeSubtitle>{subtitle}</HomeSubtitle>
      <HomeDescription>{description}</HomeDescription>
    </div>
  );
};

export default HomeSection;
