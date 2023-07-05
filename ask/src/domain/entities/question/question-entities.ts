import {
  Answer,
} from '../answer/answer-entities';

export type Question = {
  id: string;
  views: number;
  askedAt: Date;
  askedBy: string;
  username: string;
  question: string;
  answer?: Answer;
};

export type CreateQuestion = Omit<Question, 'id' | 'answer'>;
