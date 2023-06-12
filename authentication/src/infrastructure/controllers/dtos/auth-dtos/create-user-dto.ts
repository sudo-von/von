import { z } from 'zod';

export const createUserDto = z.object({
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
  profile_picture: z
    .string({
      required_error: 'profile_picture field is required',
      invalid_type_error: 'profile_picture field must be a string',
    })
    .trim()
    .url({
      message: 'profile_picture field must contain a valid url',
    }),
  about: z
    .object({
      position: z
        .string({
          required_error: 'position field is required',
          invalid_type_error: 'position field must be a string',
        })
        .trim(),
      interest: z
        .string({
          required_error: 'interest field is required',
          invalid_type_error: 'interest field must be a string',
        })
        .trim(),
      quote: z
        .string({
          required_error: 'quote field is required',
          invalid_type_error: 'quote field must be a string',
        })
        .trim(),
    }),
});

type CreateUserDto = z.infer<typeof createUserDto>;

export default CreateUserDto;
