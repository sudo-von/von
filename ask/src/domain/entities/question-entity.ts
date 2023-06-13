import { AnswerEntity } from './answer-entity';

export type QuestionEntity = {
  id: string;
  userId: string;
  question: string;
  askedBy: string;
  askedAt: Date;
  answer: AnswerEntity;
};

export type CreateQuestionEntity = Readonly<Omit<QuestionEntity, 'id' | 'answer'>>;
