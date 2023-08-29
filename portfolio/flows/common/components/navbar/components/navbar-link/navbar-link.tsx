import { FC } from "react";
import Link from "next/link";
import { Route } from "../../navbar.types";
import Typography from "../../../typography/typography";

type NavbarLinkProps = Route & {
  isPathActive: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({ name, path, isPathActive }) => {
  const color = isPathActive ? "dark" : "normal";
  const weight = isPathActive ? "normal" : "light";
  return (
    <Typography color={color} component="p" size="normal" weight={weight}>
      <Link href={path} className="hover:text-slate-850">
        {name}
      </Link>
    </Typography>
  );
};

export default NavbarLink;
