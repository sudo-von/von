import {
  DetailedAnswerResponse,
} from '../answer-entity/answer-response-entities';

export type DetailedQuestionResponse = {
  id: string;
  views: number;
  asked_at: Date;
  username: string;
  question: string;
  answer?: DetailedAnswerResponse;
};
