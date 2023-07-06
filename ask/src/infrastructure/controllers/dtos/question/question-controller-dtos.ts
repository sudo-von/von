import {
  z,
} from 'zod';
import {
  AnswerController,
} from '../answer/answer-controller-dtos';

export type QuestionController = {
  id: string;
  views: number;
  asked_at: Date;
  asked_by: string;
  username: string;
  question: string;
  answer?: AnswerController;
};

export const createQuestionController = z.object({
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});
