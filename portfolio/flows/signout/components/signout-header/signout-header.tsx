import { FC, ReactNode } from "react";
import SignoutHeading from "@signout/components/signout-heading/signout-heading";
import SignoutSubheading from "@signout/components/signout-subheading/signout-subheading";

type SignoutHeaderProps = {
  heading: ReactNode;
  subheading: ReactNode;
};

const SignoutHeader: FC<SignoutHeaderProps> = ({ heading, subheading }) => {
  return (
    <div className="text-center">
      <SignoutHeading>{heading}</SignoutHeading>
      <SignoutSubheading>{subheading}</SignoutSubheading>
    </div>
  );
};

export default SignoutHeader;
