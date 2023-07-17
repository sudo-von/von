import { FC } from "react";
import AuthTitle from "./components/AuthTitle/AuthTitle";
import AuthDescription from "./components/AuthDescription/AuthDescription";

type AuthHeaderProps = {
  title: string;
  description: string;
};

const AuthHeader: FC<AuthHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <AuthTitle>{title}</AuthTitle>
      <AuthDescription>{description}</AuthDescription>
    </div>
  );
};

export default AuthHeader;
