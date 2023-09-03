import { APIResponse } from "@services/api-service/api.service.responses";
import { QuestionResponse } from "@ask/services/question-service/question.service.responses";

export type UnansweredQuestionResponse = QuestionResponse;

export type UnansweredQuestionAPIResponse = APIResponse<UnansweredQuestionResponse>;

export type UnansweredQuestionListAPIResponse = APIResponse<UnansweredQuestionResponse[]>;
