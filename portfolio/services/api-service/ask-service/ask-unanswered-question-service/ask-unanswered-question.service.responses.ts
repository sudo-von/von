import { APIResponse } from "../../api.service.responses";
import { AskQuestionResponse } from "../ask-question-service/ask-question.service.responses";

export type AskUnansweredQuestionResponse = AskQuestionResponse;

export type AskUnansweredQuestionAPIResponse = APIResponse<AskUnansweredQuestionResponse>;

export type AskUnansweredQuestionListAPIResponse = APIResponse<AskUnansweredQuestionResponse[]>;
