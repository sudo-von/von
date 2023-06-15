import { AnswerEntity } from './answer-entity';

export type QuestionEntity = {
  id: string;
  username: string;
  question: string;
  askedBy: string;
  askedAt: Date;
  answer?: AnswerEntity;
};

export type MediumQuestionEntity = Readonly<Omit<QuestionEntity, 'askedBy'>>;

export type CreateQuestionEntity = Readonly<Omit<QuestionEntity, 'id' | 'answer'>>;
