import { FC } from "react";
import AuthLink from "../AuthLink/AuthLink";
import AuthFramedText from "../AuthFramedText/AuthFramedText";

type AuthFramedLinkProps = {
  path: string;
  name: string;
  message: string;
};

const AuthFramedLink: FC<AuthFramedLinkProps> = ({ path, name, message }) => {
  return (
    <div className="flex flex-col">
      <AuthFramedText>{message}</AuthFramedText>
      <AuthLink name={name} path={path} />
    </div>
  );
};

export default AuthFramedLink;
