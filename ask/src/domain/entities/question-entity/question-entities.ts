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

export type PartialDetailedQuestion = Partial<Omit<DetailedQuestion, 'id'>>;

export type Question = Pick<DetailedQuestion, 'askedBy' | 'question'>;

export type CreateQuestion = Question;

export type CreateBroadcastQuestion = Question;
