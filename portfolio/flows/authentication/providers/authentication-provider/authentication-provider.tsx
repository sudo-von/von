import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { getCookie } from "@services/cookie-service/cookie.service";
import { decodeToken } from "@services/token-service/token.service";
import { AuthenticationContext } from "@authentication/contexts/authentication-context/authentication-context";
import { authenticationReducer } from "@authentication/reducers/authentication-reducer/authentication-reducer";
import { initialState } from "@authentication/contexts/authentication-context/authentication-context.data";

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  useEffect(() => {
    const token = getCookie("token");
    if (!token) return;
    const { payload } = decodeToken(token);
    dispatch({ type: "LOG_IN", payload: payload });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
