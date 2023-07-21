import { FC } from "react";
import { useRouter } from "next/router";
import { Route } from "../../features/route/route-entities";
import NavbarLink from "./components/NavbarLink/NavbarLink";

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
