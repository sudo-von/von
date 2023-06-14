import { z } from 'zod';

export const createQuestionDto = z.object({
  username: z
    .string({
      required_error: 'username field is required',
      invalid_type_error: 'username field must be a string',
    })
    .trim(),
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});

type CreateQuestionDto = z.infer<typeof createQuestionDto>;

export default CreateQuestionDto;
