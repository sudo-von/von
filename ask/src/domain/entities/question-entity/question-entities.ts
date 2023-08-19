import {
  DetailedAnswer,
} from '../answer-entity/answer-entities';

export type Question = {
  id: string;
  askedBy: string;
  question: string;
};

export type DetailedQuestion = Question & {
  views: number;
  askedAt: Date;
  username: string;
  answer?: DetailedAnswer;
};

export type CreateQuestion = Omit<Question, 'id'>;

export type CreateDailyQuestion = Omit<Question, 'id'>;

export type CreateDetailedQuestion = Omit<DetailedQuestion, 'id'>;

export type PartialDetailedQuestion = Partial<Omit<DetailedQuestion, 'id'>>;
