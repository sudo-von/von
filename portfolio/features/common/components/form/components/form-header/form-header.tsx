import { FC, ReactNode } from "react";
import FormHeading from "../form-heading/form-heading";
import FormSubheading from "../form-subheading/form-subheading";

type FormHeaderProps = {
  heading: ReactNode;
  subheading: ReactNode;
};

const FormHeader: FC<FormHeaderProps> = ({ heading, subheading }) => {
  return (
    <>
      <FormHeading>{heading}</FormHeading>
      <FormSubheading>{subheading}</FormSubheading>
    </>
  );
};

export default FormHeader;
