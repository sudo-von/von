import {
  z,
} from 'zod';

export const CreateVideoRequest = z.object({
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
  media: z.object({
    url: z
      .string({
        required_error: 'url field is required',
        invalid_type_error: 'url field must be a string',
      })
      .trim()
      .url('url field must contain a valid url'),
  }, {
    required_error: 'media field is required',
    invalid_type_error: 'media field must be an object',
  }),
});

export const UpdateVideoRequest = z.object({
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
  media: z.object({
    url: z
      .string({
        required_error: 'url field is required',
        invalid_type_error: 'url field must be a string',
      })
      .trim()
      .url('url field must contain a valid url'),
  }, {
    required_error: 'media field is required',
    invalid_type_error: 'media field must be an object',
  }),
});
