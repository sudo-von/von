import {
  AnswerSchema,
} from '../answer-repository/answer-repository-schema';

export type QuestionSchema = {
  views: number;
  asked_at: Date;
  asked_by: string;
  username: string;
  question: string;
  is_deleted: boolean;
  answer?: AnswerSchema;
};
