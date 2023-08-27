import createAPIService from "../../api-service/api.service";
import { AskAnsweredQuestionListAPIResponse } from "./ask-question.service.responses";

const askAnsweredQuestionService = createAPIService({
  base: "question",
  port: 3001,
  version: 1,
});

export const getAskAnsweredQuestionListByUsername = async (
  username: string
): Promise<AskAnsweredQuestionListAPIResponse> => {
  const query = `username/${username}`;
  const { data } =
    await askAnsweredQuestionService.get<AskAnsweredQuestionListAPIResponse>(
      query
    );
  return data;
};
