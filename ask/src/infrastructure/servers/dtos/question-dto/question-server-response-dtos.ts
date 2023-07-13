import {
  DetailedAnswerResponse,
} from '../answer-dto/answer-server-response-dtos';

export type DetailedQuestionResponse = {
  id: string;
  views: number;
  asked_at: Date;
  username: string;
  question: string;
  answer?: DetailedAnswerResponse;
};
