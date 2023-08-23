import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { getCookie } from "../../../../services/cookie-service/cookie.service";
import { AuthenticationContext } from "../../contexts/authentication-context/authentication-context";
import { authenticationReducer } from "../../reducers/authentication-reducer/authentication-reducer";
import { authenticationInitialState } from "../../contexts/authentication-context/authentication-context.data";
import { decodeToken } from "../../../../services/token-service/token.service";

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    authenticationReducer,
    authenticationInitialState
  );

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
