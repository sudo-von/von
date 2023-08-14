import {
  z,
} from 'zod';

export const CreateSocialNetworkRequest = z.object({
  url: z
    .string({
      required_error: 'url field is required',
      invalid_type_error: 'url field must be a string',
    })
    .trim(),
  name: z
    .string({
      required_error: 'name field is required',
      invalid_type_error: 'name field must be a string',
    })
    .trim(),
});

export const UpdateSocialNetworkRequest = z.object({
  url: z
    .string({
      required_error: 'url field is required',
      invalid_type_error: 'url field must be a string',
    })
    .trim(),
  name: z
    .string({
      required_error: 'name field is required',
      invalid_type_error: 'name field must be a string',
    })
    .trim(),
});
