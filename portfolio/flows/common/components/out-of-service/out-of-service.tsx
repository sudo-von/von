import { FC } from "react";
import Title from "../../../home/components/section/components/title/title";
import Description from "../../../home/components/section/components/description/description";

type OutOfServiceProps = {
  title: string;
  description: string;
};

const OutOfService: FC<OutOfServiceProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      <Title>{title}</Title>
      <Description>|</Description>
      <Description>{description}</Description>
    </div>
  );
};

export default OutOfService;
