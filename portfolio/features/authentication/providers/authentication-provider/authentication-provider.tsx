import { FC, PropsWithChildren, useReducer } from "react";
import { AuthenticationContext } from "../../contexts/authentication-context/authentication-context";
import { authenticationReducer } from "../../reducers/authentication-reducer/authentication-reducer";
import { authenticationInitialState } from "../../contexts/authentication-context/authentication-context.data";

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(
    authenticationReducer,
    authenticationInitialState
  );

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
