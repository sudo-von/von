import { AnswerEntity } from './answer-entity';

export type DetailedQuestionEntity = {
  id: string;
  username: string;
  question: string;
  askedBy: string;
  askedAt: Date;
  answer?: AnswerEntity;
};

export type QuestionEntity = Readonly<Omit<DetailedQuestionEntity, 'askedBy'>>;

export type CreateQuestionEntity = Readonly<Omit<DetailedQuestionEntity, 'id' | 'answer'>>;
