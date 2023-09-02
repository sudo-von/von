import { AuthenticationState } from "@authentication/contexts/authentication-context/authentication-context.types";
import { AuthenticationAction } from "@authentication/reducers/authentication-reducer/authentication-reducer.types";

export const authenticationReducer = (
  state: AuthenticationState,
  action: AuthenticationAction
): AuthenticationState => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
