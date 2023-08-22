import { FC } from "react";
import Hyperlink from "../../../hyperlink/hyperlink";
import FramedBox from "../../../framed-box/framed-box";
import FormHeading from "../form-heading/form-heading";

type FormFooterProps = {
  path: string;
  heading: string;
  subheading: string;
};

const FormFooter: FC<FormFooterProps> = ({ path, heading, subheading }) => {
  return (
    <>
      <FramedBox>
        <FormHeading>{heading}</FormHeading>
      </FramedBox>
      <Hyperlink path={path}>{subheading}</Hyperlink>
    </>
  );
};

export default FormFooter;
