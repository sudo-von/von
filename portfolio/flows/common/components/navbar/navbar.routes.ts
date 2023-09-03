import { Route } from "./navbar.types";

export const publicRoutes: Route[] = [
  { path: "/", name: "Home" },
  { path: "/ask", name: "Ask" },
  { path: "/blog", name: "Blog" },
  { path: "/signin", name: "Sign in" },
];

export const privateRoutes: Route[] = [
  { path: "/", name: "Home" },
  { path: "/ask", name: "Ask" },
  { path: "/blog", name: "Blog" },
  { path: "/signout", name: "Sign out" },
];