import { APIResponse } from "@services/api-service/api.service.responses";

export type QuestionResponse = {
  asked_at: string;
  id: string;
  question: string;
  username: string;
  views: number;
};

export type QuestionAPIResponse = APIResponse<QuestionResponse>;

export type QuestionListAPIResponse = APIResponse<QuestionResponse[]>;
