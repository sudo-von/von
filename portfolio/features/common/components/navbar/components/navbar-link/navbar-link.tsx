import { FC } from "react";
import Link from "next/link";
import { Route } from "../../navbar.types";
import Typography from "../../../typography/typography";

type NavbarLinkProps = Route & {
  isPathActive: boolean;
};

const NavbarLink: FC<NavbarLinkProps> = ({ name, path, isPathActive }) => {
  const color = isPathActive ? "black" : "slate";
  const weight = isPathActive ? "regular" : "light";
  return (
    <Typography color={color} component="p" variant="paragraph" weight={weight}>
      <Link href={path} className="hover:text-slate-850">
        {name}
      </Link>
    </Typography>
  );
};

export default NavbarLink;
