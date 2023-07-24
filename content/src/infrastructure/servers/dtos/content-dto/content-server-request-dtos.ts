import {
  z,
} from 'zod';

export const CreateContentFiltersRequest = z.object({
  id: z
    .string({
      invalid_type_error: 'id field must be a string',
    })
    .trim()
    .optional(),
  type: z
    .string({
      invalid_type_error: 'type field must be a string',
    })
    .trim()
    .toLowerCase()
    .optional(),
  title: z
    .string({
      invalid_type_error: 'title field must be a string',
    })
    .trim()
    .optional(),
  subtitle: z
    .string({
      invalid_type_error: 'subtitle field must be a string',
    })
    .trim()
    .optional(),
  username: z
    .string({
      invalid_type_error: 'username field must be a string',
    })
    .trim()
    .toLowerCase()
    .optional(),
  description: z
    .string({
      invalid_type_error: 'description field must be a string',
    })
    .trim()
    .optional(),
});

export const CreateContentRequest = z.object({
  type: z
    .string({
      required_error: 'type field is required',
      invalid_type_error: 'type field must be a string',
    })
    .trim()
    .toLowerCase(),
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
  type: z
    .string({
      required_error: 'type field is required',
      invalid_type_error: 'type field must be a string',
    })
    .trim()
    .toLowerCase(),
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
