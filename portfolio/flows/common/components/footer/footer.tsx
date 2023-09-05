import { FC } from "react";
import Heading from "@common/components/heading/heading";
import Hyperlink from "@common/components/hyperlink/hyperlink";
import FramedBox from "@common/components/framed-box/framed-box";
import Subheading from "@common/components/subheading/subheading";

type FooterProps = {
  heading: string;
  path: string;
  subheading: string;
};

const Footer: FC<FooterProps> = ({ path, heading, subheading }) => {
  return (
    <div className="flex flex-col text-center mt-2.5">
      <FramedBox>
        <Subheading>{subheading}</Subheading>
      </FramedBox>
      <Hyperlink path={path}>
        <Heading>{heading}</Heading>
      </Hyperlink>
    </div>
  );
};

export default Footer;
