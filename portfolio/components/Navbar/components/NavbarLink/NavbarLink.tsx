import { FC } from "react";
import Link from "next/link";
import Typography from "../../../Typography/Typography";

type NavbarLinkProps = {
  path: string;
  name: string;
  isPathActive: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({ path, name, isPathActive }) => {
  const color = isPathActive ? "black" : "slate";
  const weight = isPathActive ? "regular" : "light";
  return (
    <Typography color={color} weight={weight}>
      <Link href={path} className="hover:text-slate-850">
        {name}
      </Link>
    </Typography>
  );
};

export default NavbarLink;
