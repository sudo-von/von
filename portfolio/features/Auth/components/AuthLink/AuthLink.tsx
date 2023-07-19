import { FC } from "react";
import Link from "next/link";
import Typography from "../../../../components/Typography/Typography";

type AuthLinkProps = {
  path: string;
  name: string;
};

const AuthLink: FC<AuthLinkProps> = ({ path, name }) => {
  return (
    <Typography align="center">
      <Link href={path}>{name}</Link>
    </Typography>
  );
};

export default AuthLink;
