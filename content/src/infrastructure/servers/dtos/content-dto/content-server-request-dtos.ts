import {
  z,
} from 'zod';

export const CreateVideoContentRequest = z.object({
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
  video: z.object({
    url: z
      .string({
        required_error: 'url field is required',
        invalid_type_error: 'url field must be a string',
      })
      .trim()
      .url('url field must be a valid url'),
  }, {
    required_error: 'video field is required',
    invalid_type_error: 'video field must be an object',
  }),
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
