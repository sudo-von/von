import {
  z,
} from 'zod';
import {
  AnswerServer,
} from '../answer/answer-server-dtos';

export type QuestionServer = {
  id: string;
  views: number;
  asked_at: Date;
  username: string;
  question: string;
  answer?: AnswerServer;
};

export const createQuestionServer = z.object({
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});
