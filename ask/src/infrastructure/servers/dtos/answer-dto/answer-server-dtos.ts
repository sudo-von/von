import {
  z,
} from 'zod';

export type AnswerResponse = {
  answer: string;
  answered_at: Date;
};

export const CreateAnswerRequest = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});

export const UpdateAnswerRequest = z.object({
  answer: z
    .string({
      required_error: 'answer field is required',
      invalid_type_error: 'answer field must be a string',
    })
    .trim(),
});
