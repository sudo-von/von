import {
  z,
} from 'zod';

export const CreateContentRequest = z.object({
  title: z
    .string({
      required_error: 'title field is required',
      invalid_type_error: 'title field must be a string',
    })
    .trim(),
  subtitle: z
    .string({
      required_error: 'subtitle field is required',
      invalid_type_error: 'subtitle field must be a string',
    })
    .trim(),
  description: z
    .string({
      required_error: 'description field is required',
      invalid_type_error: 'description field must be a string',
    })
    .trim(),
});

export const UpdateContentRequest = z.object({
  title: z
    .string({
      required_error: 'title field is required',
      invalid_type_error: 'title field must be a string',
    })
    .trim(),
  subtitle: z
    .string({
      required_error: 'subtitle field is required',
      invalid_type_error: 'subtitle field must be a string',
    })
    .trim(),
  description: z
    .string({
      required_error: 'description field is required',
      invalid_type_error: 'description field must be a string',
    })
    .trim(),
});
