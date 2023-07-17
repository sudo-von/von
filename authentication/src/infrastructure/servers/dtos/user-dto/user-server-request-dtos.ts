import {
  z,
} from 'zod';

export const CreateUserCredentialsRequest = z.object({
  email: z
    .string({
      required_error: 'email field is required',
      invalid_type_error: 'email field must be a string',
    })
    .email('email field must contain a valid email')
    .trim()
    .toLowerCase(),
  password: z
    .string({
      required_error: 'password field is required',
      invalid_type_error: 'password field must be a string',
    })
    .trim(),
});

export const CreateUserRequest = z.object({
  name: z
    .string({
      required_error: 'name field is required',
      invalid_type_error: 'name field must be a string',
    })
    .trim(),
  email: z
    .string({
      required_error: 'email field is required',
      invalid_type_error: 'email field must be a string',
    })
    .email('email field must contain a valid email')
    .trim()
    .toLowerCase(),
  username: z
    .string({
      required_error: 'username field is required',
      invalid_type_error: 'username field must be a string',
    })
    .trim()
    .toLowerCase(),
  password: z
    .string({
      required_error: 'password field is required',
      invalid_type_error: 'password field must be a string',
    })
    .trim(),
});

export const UpdateUserRequest = z.object({
  name: z
    .string({
      invalid_type_error: 'name field must be a string',
    })
    .trim()
    .optional(),
  email: z
    .string({
      invalid_type_error: 'email field must be a string',
    })
    .email('email field must contain a valid email')
    .trim()
    .toLowerCase()
    .optional(),
  username: z
    .string({
      invalid_type_error: 'username field must be a string',
    })
    .trim()
    .toLowerCase()
    .optional(),
  password: z
    .string({
      required_error: 'password field is required',
      invalid_type_error: 'password field must be a string',
    })
    .trim(),
});
