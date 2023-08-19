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

export type CreateDetailedQuestion = Omit<DetailedQuestion, 'id'>;

export type PartialDetailedQuestion = Partial<DetailedQuestion>;

export type CreateQuestion = Omit<Question, 'id'>;
