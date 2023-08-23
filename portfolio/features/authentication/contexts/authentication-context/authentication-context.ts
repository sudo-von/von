import { createContext } from "react";
import { authenticationInitialContext } from "./authentication-context.data";

export const AuthenticationContext = createContext(
  authenticationInitialContext
);
