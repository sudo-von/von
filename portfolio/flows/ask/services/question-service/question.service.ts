import { CreateQuestionRequest } from "./question.requests";
import { QuestionAPIResponse } from "./question.service.responses";
import createAPIService from "../../../../services/api-service/api.service";

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
