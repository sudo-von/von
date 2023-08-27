import { APIResponse } from "../../api-service/api.service.responses";

export type AskQuestionResponse = {
  id: string;
  views: number;
  asked_at: string;
  username: string;
  question: string;
};

export type AskQuestionAPIResponse = APIResponse<AskQuestionResponse>;

export type AskQuestionListAPIResponse = APIResponse<AskQuestionResponse[]>;
