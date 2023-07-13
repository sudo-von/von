import {
  z,
} from 'zod';

const CreateQuestionRequest = z.object({
  question: z
    .string({
      required_error: 'question field is required',
      invalid_type_error: 'question field must be a string',
    })
    .trim(),
});

export default CreateQuestionRequest;
