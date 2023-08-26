import createAPIService from "../../api-service/api.service";
import { AskUserAPIResponse } from "./ask-user.service.responses";

const askUserService = createAPIService({
  base: "user",
  port: 3001,
  version: 1,
});

export const getAskUserByUsername = async (username: string): Promise<AskUserAPIResponse> => {
  const { data } = await askUserService.get<AskUserAPIResponse>(username);
  return data;
};
