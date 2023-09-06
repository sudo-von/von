import { FC, PropsWithChildren } from "react";
import useAuthentication from "@authentication/hooks/use-authentication/use-authentication";
import { AuthenticationContext } from "@authentication/contexts/authentication-context/authentication-context";

const AuthenticationProvider: FC<PropsWithChildren> = ({ children }) => {
  const { state, dispatch } = useAuthentication();
  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
