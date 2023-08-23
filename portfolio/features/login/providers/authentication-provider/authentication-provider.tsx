import { FC, PropsWithChildren, useReducer } from "react";
import {
  AuthContext,
  authenticationInitialState,
} from "../../contexts/authentication-context/authentication-context";
import { authenticationReducer } from "../../reducers/authentication-reducer/authentication-reducer";
import { AuthenticationContext } from "../../contexts/authentication-context/authentication-context.types";

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    authenticationReducer,
    authenticationInitialState
  );

  const authenticationContext: AuthenticationContext = { state, dispatch };

  return (
    <AuthContext.Provider value={authenticationContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;
