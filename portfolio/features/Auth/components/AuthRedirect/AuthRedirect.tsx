import { FC } from "react";
import AuthLink from "../AuthLink/AuthLink";
import AuthFramedText from "../AuthFramedText/AuthFramedText";

type AuthRedirectProps = {
  name: string;
  path: string;
  message: string;
};

const AuthRedirect: FC<AuthRedirectProps> = ({ name, path, message }) => {
  return (
    <div className="flex flex-col">
      <AuthFramedText>{message}</AuthFramedText>
      <AuthLink path={path}>{name}</AuthLink>
    </div>
  );
};

export default AuthRedirect;
