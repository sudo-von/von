import { AnswerEntity } from './answer-entity';

export type DetailedQuestionEntity = {
  id: string;
  username: string;
  question: string;
  askedBy: string;
  views: number;
  askedAt: Date;
  answer?: AnswerEntity;
};

export type QuestionEntity = Readonly<Omit<DetailedQuestionEntity, 'askedBy'>>;

export type CreateQuestionEntity = Readonly<Omit<DetailedQuestionEntity, 'id' | 'answer'>>;

export type UpdateQuestionEntity = Readonly<Omit<DetailedQuestionEntity, 'id'>>;
