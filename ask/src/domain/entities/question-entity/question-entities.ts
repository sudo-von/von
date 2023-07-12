import {
  DetailedAnswer,
} from '../answer-entity/answer-entities';

export type DetailedQuestion = Readonly<{
  id: string;
  views: number;
  askedAt: Date;
  askedBy: string;
  username: string;
  question: string;
  answer?: DetailedAnswer;
}>;

export type CreateDetailedQuestion = Omit<DetailedQuestion, 'id'>;

export type UpdateDetailedQuestion = Omit<DetailedQuestion, 'id'>;

export type CreateQuestion = Pick<DetailedQuestion, 'askedBy' | 'question'>;
