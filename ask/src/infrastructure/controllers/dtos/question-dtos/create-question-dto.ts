import { z } from 'zod';

export const createQuestionDto = z.object({
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});

type CreateQuestionDto = z.infer<typeof createQuestionDto>;

export default CreateQuestionDto;
