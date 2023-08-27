import createAPIService from "../../api.service";
import {
  AskUnansweredQuestionListAPIResponse,
} from "./ask-unanswered-question.service.responses";

const askAnsweredQuestionService = createAPIService({
  base: "answered-question",
  port: 3001,
  version: 1,
});

export const getAskUnansweredQuestionListByUsername = async (
  username: string
): Promise<AskUnansweredQuestionListAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await askAnsweredQuestionService.get<AskUnansweredQuestionListAPIResponse>(query);
  return data;
};
