import createAPIService from "@services/api-service/api.service";
import { QuestionAPIResponse } from "@ask/services/question-service/question.service.responses";
import { CreateQuestionRequest } from "@ask/services/question-service/question.service.requests";

const questionService = createAPIService({
  base: "question",
  port: 3001,
  version: 1,
});

export const createQuestionByUsername = async (
  username: string,
  payload: CreateQuestionRequest
): Promise<QuestionAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await questionService.post<QuestionAPIResponse>(
    query,
    payload
  );
  return data;
};
