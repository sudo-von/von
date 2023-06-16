import { AnswerEntity } from './answer-entity';

export type QuestionEntity = {
  id: string;
  username: string;
  question: string;
  askedBy: string;
  views: number;
  askedAt: Date;
  answer?: AnswerEntity;
};

export type CreateQuestionEntity = Readonly<Omit<QuestionEntity, 'id' | 'answer'>>;

export type UpdateQuestionEntity = Readonly<Omit<QuestionEntity, 'id'>>;

export const handleAskedBy = (askedBy: string) => (askedBy === 'chat-gpt' ? 'chat-gpt' : 'anonymous');
