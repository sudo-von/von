import { FC } from "react";
import { Route } from "./navbar.types";
import { useRouter } from "next/router";
import NavbarLink from "./components/navbar-link/navbar-link";

type NavbarProps = {
  routes: Route[];
};

const Navbar: FC<NavbarProps> = ({ routes = [] }) => {
  const { pathname } = useRouter();
  return (
    <div className="flex justify-between sm:justify-end sm:gap-x-20">
      {routes.map(({ name, path }) => (
        <NavbarLink
          name={name}
          path={path}
          key={`${path}-${name}`}
          isPathActive={pathname === path}
        />
      ))}
    </div>
  );
};

export default Navbar;
