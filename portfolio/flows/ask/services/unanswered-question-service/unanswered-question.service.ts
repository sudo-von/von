import createAPIService from "@services/api-service/api.service";
import { UnansweredQuestionListAPIResponse } from "@ask/services/unanswered-question-service/unanswered-question.service.responses";

const unansweredQuestionService = createAPIService({
  base: "unanswered-question",
  port: 3001,
  version: 1,
});

export const getUnansweredQuestionListByUsername = async (
  username: string,
  token: string,
): Promise<UnansweredQuestionListAPIResponse> => {
  const query = `username/${username}`;
  const { data } = await unansweredQuestionService.get<UnansweredQuestionListAPIResponse>(query, {
    headers: {
      Authorization: token,
    }
  });
  return data;
};
