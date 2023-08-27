import {
  AskAnsweredQuestionAPIResponse,
  AskAnsweredQuestionListAPIResponse,
} from "./ask-question.service.responses";
import createAPIService from "../../api.service";

const askAnsweredQuestionService = createAPIService({
  base: "answered-question",
  port: 3001,
  version: 1,
});

export const getAskAnsweredQuestionById = async (
  id: string
): Promise<AskAnsweredQuestionAPIResponse> => {
  const { data } = await askAnsweredQuestionService.get<AskAnsweredQuestionAPIResponse>(id);
  return data;
};

export const getAskAnsweredQuestionListByUsername = async (
  username: string
): Promise<AskAnsweredQuestionListAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await askAnsweredQuestionService.get<AskAnsweredQuestionListAPIResponse>(query);
  return data;
};
