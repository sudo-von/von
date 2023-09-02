import { createContext } from "react";
import { initialContext } from "@authentication/contexts/authentication-context/authentication-context.data";

export const AuthenticationContext = createContext(initialContext);
