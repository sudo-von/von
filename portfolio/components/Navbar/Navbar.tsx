import { useRouter } from "next/router";
import NavbarLink from "./components/NavbarLink/NavbarLink";

type Route = {
  path: string;
  name: string;
};

const routes: Route[] = [
  { path: "/", name: "Home" },
  { path: "/ask", name: "Ask" },
  { path: "/blog", name: "Blog" },
  { path: "/login", name: "Login" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div className="flex justify-between md:justify-end md:gap-x-20">
      {routes.map(({ path, name }) => (
        <NavbarLink
          key={name}
          name={name}
          path={path}
          isPathActive={pathname === path}
        />
      ))}
    </div>
  );
};

export default Navbar;
