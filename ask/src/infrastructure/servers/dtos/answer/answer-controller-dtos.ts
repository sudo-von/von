import {
  z,
} from 'zod';

export type AnswerController = {
  answer: string;
  answered_at: Date;
};

export const createAnswerController = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});

export const updateAnswerController = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});
