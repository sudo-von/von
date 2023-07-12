import {
  Answer,
} from '../answer-entity/answer-entities';

export type Question = Readonly<{
  id: string;
  views: number;
  askedAt: Date;
  askedBy: string;
  username: string;
  question: string;
  answer?: Answer;
}>;

export type CreateQuestion = Pick<Question, 'askedBy' | 'question'>;
