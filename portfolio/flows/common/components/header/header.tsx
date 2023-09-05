import { FC, ReactNode } from "react";
import Heading from "@common/components/heading/heading";
import Subheading from "@common/components/subheading/subheading";

type HeaderProps = {
  heading: ReactNode;
  subheading: ReactNode;
};

const Header: FC<HeaderProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </div>
  );
};

export default Header;
