import { FC, useContext, useEffect, useState } from "react";
import { Route } from "./navbar.types";
import { useRouter } from "next/router";
import NavbarLink from "./components/navbar-link/navbar-link";
import { AuthenticationContext } from "@authentication/contexts/authentication-context/authentication-context";
import { privateRoutes, publicRoutes } from "./navbar.routes";

const Navbar = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  const { pathname } = useRouter();
  const { state } = useContext(AuthenticationContext);

  useEffect(() => {
    if (state.isLoggedIn) return setRoutes(privateRoutes);
    setRoutes(publicRoutes);
  }, [state.isLoggedIn]);

  return (
    <div className="flex justify-between lg:justify-end lg:gap-x-20">
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
