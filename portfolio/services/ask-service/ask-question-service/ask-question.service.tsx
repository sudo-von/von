import createAPIService from "../../api-service/api.service";
import { CreateQuestionRequest } from "./ask-question.requests";
import { AskQuestionAPIResponse } from "./ask-question.service.responses";

const askQuestionService = createAPIService({
  base: "question",
  port: 3001,
  version: 1,
});

export const createAskQuestionByUsername = async (
  username: string,
  payload: CreateQuestionRequest
): Promise<AskQuestionAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await askQuestionService.post<AskQuestionAPIResponse>(
    query,
    payload
  );
  return data;
};
