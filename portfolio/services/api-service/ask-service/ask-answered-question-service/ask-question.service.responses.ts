import { APIResponse } from "../../api.service.responses";
import { AskAnswerResponse } from "../ask-answer-service/ask-answer.service.responses";
import { AskQuestionResponse } from "../ask-question-service/ask-question.service.responses";

export type AskAnsweredQuestionResponse = AskQuestionResponse & {
  answer: AskAnswerResponse;
};

export type AskAnsweredQuestionAPIResponse = APIResponse<AskAnsweredQuestionResponse>;

export type AskAnsweredQuestionListAPIResponse = APIResponse<AskAnsweredQuestionResponse[]>;
