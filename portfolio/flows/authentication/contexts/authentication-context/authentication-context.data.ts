import {
  AuthenticationState,
  AuthenticationContext,
} from "./authentication-context.types";

export const authenticationInitialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
};

export const authenticationInitialContext: AuthenticationContext = {
  state: authenticationInitialState,
  dispatch: () => {},
};
