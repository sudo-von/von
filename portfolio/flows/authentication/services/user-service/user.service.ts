import createAPIService from "@services/api-service/api.service";
import { UserAPIResponse, UserResponse } from "@authentication/services/user-service/user.service.responses";

const userService = createAPIService({
  base: "user",
  port: 3000,
  version: 1,
});

export const getUserByUsername = async (username: string): Promise<UserResponse> => {
  const query = `/username/${username}`;
  const { data } = await userService.get<UserAPIResponse>(query);
  return data.result;
};
