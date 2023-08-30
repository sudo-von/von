import createAPIService from "../../../api-service/api.service";
import { AuthUserDetailsRequest } from "./auth-user-details.service.requests";
import { AuthUserAPIResponse } from "../../../../flows/authentication/services/user-service/user.service.responses";

const authUserDetailsService = createAPIService({
  base: "authentication",
  port: 3000,
  version: 1,
});

export const replaceAuthUserDetailsByUsername = async (
  username: string,
  userDetails: AuthUserDetailsRequest
): Promise<AuthUserAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await authUserDetailsService.put<AuthUserAPIResponse>(query, userDetails);
  return data;
};