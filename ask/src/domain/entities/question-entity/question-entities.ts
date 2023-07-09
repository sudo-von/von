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

export type QuestionPayload = Omit<Question, 'id'>;

export type CreateQuestion = Pick<QuestionPayload, 'askedBy' | 'username' | 'question'>;
