import {
  AnswerRepositorySchema,
} from '../answer-repository/answer-repository-schema';

export type QuestionRepositorySchema = {
  id: string;
  views: number;
  asked_at: Date;
  asked_by: string;
  username: string;
  question: string;
  is_deleted: boolean;
  answer?: AnswerRepositorySchema;
};
