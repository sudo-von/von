import { Answer } from './answer-entity';

export type Question = {
  id: string;
  userId: string;
  question: string;
  askedBy: string;
  askedAt: Date;
  answer: Answer;
};

export type CreateQuestion = Readonly<Omit<Question, 'id' | 'answer'>>;
