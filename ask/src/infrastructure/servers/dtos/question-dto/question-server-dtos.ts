import {
  z,
} from 'zod';
import {
  AnswerResponse,
} from '../answer-dto/answer-server-dtos';

export type QuestionResponse = {
  id: string;
  views: number;
  asked_at: Date;
  username: string;
  question: string;
  answer?: AnswerResponse;
};

export const CreateQuestionRequest = z.object({
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});
