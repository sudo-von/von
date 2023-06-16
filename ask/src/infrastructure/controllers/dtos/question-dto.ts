import { AnswerDto } from './answer-dto';

export type QuestionDto = {
  id: string;
  username: string;
  question: string;
  views: number;
  asked_at: Date;
  answer?: AnswerDto;
  asked_by: string;
};
