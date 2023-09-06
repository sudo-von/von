import { AuthenticationState, AuthenticationContext } from "@authentication/contexts/authentication-context/authentication-context.types";

export const initialState: AuthenticationState = {
  isLoggedIn: false,
  user: null,
};

export const initialContext: AuthenticationContext = {
  dispatch: () => {},
  state: initialState,
};
