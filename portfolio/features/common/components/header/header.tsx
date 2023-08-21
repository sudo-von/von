import { FC, ReactNode } from "react";
import Heading from "./components/heading/heading";
import Subheading from "./components/subheading/subheading";

type PanelProps = {
  heading: ReactNode;
  subheading: ReactNode;
};

const Header: FC<PanelProps> = ({ heading, subheading }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
    </>
  );
};

export default Header;
