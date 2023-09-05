import createAPIService from "@services/api-service/api.service";
import { CreateAnswerRequest, UpdateAnswerRequest } from "@ask/services/answer-service/answer.service.requests";
import { AnsweredQuestionAPIResponse } from "@ask/services/answered-question-service/answered-question.service.responses";

const answerService = createAPIService({
  base: "answer",
  port: 3001,
  version: 1,
});

export const createAnswerByQuestionId = async (
  id: string,
  payload: CreateAnswerRequest
): Promise<AnsweredQuestionAPIResponse> => {
  const query = `question/${id}`;
  const { data } = await answerService.post<AnsweredQuestionAPIResponse>(query, payload);
  return data;
};

export const updateAnswerByQuestionId = async (
  id: string,
  payload: UpdateAnswerRequest
): Promise<AnsweredQuestionAPIResponse> => {
  const query = `question/${id}`;
  const { data } = await answerService.patch<AnsweredQuestionAPIResponse>(query, payload);
  return data;
};
