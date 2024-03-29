import createAPIService from "@services/api-service/api.service";
import { AnsweredQuestionAPIResponse, AnsweredQuestionListAPIResponse } from "@ask/services/answered-question-service/answered-question.service.responses";

const answeredQuestionService = createAPIService({
  base: "answered-question",
  port: 3001,
  version: 1,
});

export const getAnsweredQuestionById = async (
  id: string
): Promise<AnsweredQuestionAPIResponse> => {
  const { data } = await answeredQuestionService.get<AnsweredQuestionAPIResponse>(id);
  return data;
};

export const getAnsweredQuestionListByUsername = async (
  username: string
): Promise<AnsweredQuestionListAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await answeredQuestionService.get<AnsweredQuestionListAPIResponse>(query);
  return data;
};
