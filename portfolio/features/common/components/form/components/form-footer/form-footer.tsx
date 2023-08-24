import { FC } from "react";
import Hyperlink from "../../../hyperlink/hyperlink";
import FramedBox from "../../../framed-box/framed-box";
import FormHeading from "../form-heading/form-heading";
import FormSubheading from "../form-subheading/form-subheading";

type FormFooterProps = {
  path: string;
  heading: string;
  subheading: string;
};

const FormFooter: FC<FormFooterProps> = ({ path, heading, subheading }) => {
  return (
    <div className="flex flex-col text-center">
      <FramedBox>
        <FormSubheading>{subheading}</FormSubheading>
      </FramedBox>
      <Hyperlink path={path}>
        <FormHeading>{heading}</FormHeading>
      </Hyperlink>
    </div>
  );
};

export default FormFooter;
