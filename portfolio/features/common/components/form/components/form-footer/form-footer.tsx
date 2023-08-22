import { FC, ReactNode } from "react";
import Hyperlink from "../../../hyperlink/hyperlink";
import FramedBox from "../../../framed-box/framed-box";
import FormHeading from "../form-heading/form-heading";
import FormSubheading from "../form-subheading/form-subheading";

type FormFooterProps = {
  path: string;
  heading: ReactNode;
  subheading: ReactNode;
};

const FormFooter: FC<FormFooterProps> = ({ path, heading, subheading }) => {
  return (
    <>
      <FramedBox>
        <FormSubheading>{subheading}</FormSubheading>
      </FramedBox>
      <Hyperlink path={path}>
        <FormHeading>{heading}</FormHeading>
      </Hyperlink>
    </>
  );
};

export default FormFooter;
