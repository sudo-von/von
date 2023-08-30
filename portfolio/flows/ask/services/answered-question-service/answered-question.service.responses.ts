import { APIResponse } from "../../../../services/api-service/api.service.responses";
import { AskAnswerResponse } from "../../../../services/api-service/ask-service/ask-answer-service/ask-answer.service.responses";
import { AskQuestionResponse } from "../../../../services/api-service/ask-service/ask-question-service/ask-question.service.responses";


export type AnsweredQuestionResponse = AskQuestionResponse & {
  answer: AskAnswerResponse;
};

export type AnsweredQuestionAPIResponse = APIResponse<AnsweredQuestionResponse>;

export type AnsweredQuestionListAPIResponse = APIResponse<AnsweredQuestionResponse[]>;
