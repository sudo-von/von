import Link from "next/link";
import { FC, ReactNode } from "react";
import Typography from "../../../../components/Typography/Typography";

type AuthLinkProps = {
  path: string;
  children: ReactNode;
};

const AuthLink: FC<AuthLinkProps> = ({ path, children }) => {
  return (
    <Typography align="center">
      <Link href={path}>{children}</Link>
    </Typography>
  );
};

export default AuthLink;
