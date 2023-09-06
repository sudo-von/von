import { useEffect, useReducer } from "react";
import { getCookie } from "@services/cookie-service/cookie.service";
import { decodeToken } from "@services/token-service/token.service";
import { initialState } from "@authentication/contexts/authentication-context/authentication-context.data";
import { authenticationReducer } from "@authentication/reducers/authentication-reducer/authentication-reducer";

const useAuthentication = () => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  useEffect(() => {
    const token = getCookie("token");
    if (!token) return;
    const { payload } = decodeToken(token);
    dispatch({ type: "LOG_IN", payload: payload });
  }, []);

  return {
    dispatch,
    state,
  };
};

export default useAuthentication;
