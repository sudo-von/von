import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { deleteCookie } from "@services/cookie-service/cookie.service";
import { AuthenticationContext } from "@authentication/contexts/authentication-context/authentication-context";

const useSignout = () => {
  const { push } = useRouter();
  const { dispatch } = useContext(AuthenticationContext);

  useEffect(() => {
    deleteCookie("token");
    dispatch({ type: "LOG_OUT" });
    //push("/signin");
  }, [dispatch, push]);

};

export default useSignout;
