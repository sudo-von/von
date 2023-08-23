import { AuthenticationAction } from "./authentication-reducer.types";
import { AuthenticationState } from "../../contexts/authentication-context/authentication-context.types";

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
