import { APIResponse } from "../../api-service/api.service.responses";
import { AskAnswerResponse } from "../ask-answer-service/ask-answer.service.responses";

export type AskAnsweredQuestionResponse = {
  id: string;
  views: number;
  asked_at: string;
  username: string;
  question: string;
  answer: AskAnswerResponse;
};

export type AskAnsweredQuestionAPIResponse = APIResponse<AskAnsweredQuestionResponse>;

export type AskAnsweredQuestionListAPIResponse = APIResponse<AskAnsweredQuestionResponse[]>;
