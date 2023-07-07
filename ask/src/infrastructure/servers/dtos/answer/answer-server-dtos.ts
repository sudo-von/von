import {
  z,
} from 'zod';

export type AnswerServer = {
  answer: string;
  answered_at: Date;
};

export const createAnswerServer = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});

export const updateAnswerServer = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});
