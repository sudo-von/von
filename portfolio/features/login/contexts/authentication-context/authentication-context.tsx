import { createContext } from "react";
import {
  AuthenticationState,
  AuthenticationContext,
} from "./authentication-context.types";

export const authenticationInitialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
};

const authenticationInitialContext: AuthenticationContext = {
  state: authenticationInitialState,
  dispatch: () => {},
};

export const AuthContext = createContext<AuthenticationContext>(
  authenticationInitialContext
);
