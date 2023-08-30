import { APIResponse } from "../../../../services/api-service/api.service.responses";
import { AnswerResponse } from "../answer-service/answer.service.responses";
import { QuestionResponse } from "../question-service/question.service.responses";

export type AnsweredQuestionResponse = QuestionResponse & {
  answer: AnswerResponse;
};

export type AnsweredQuestionAPIResponse = APIResponse<AnsweredQuestionResponse>;

export type AnsweredQuestionListAPIResponse = APIResponse<AnsweredQuestionResponse[]>;
