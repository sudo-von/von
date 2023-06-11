import { z } from 'zod';

export const userCredentialsDto = z.object({
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

type UserCredentialsDto = z.infer<typeof userCredentialsDto>;

export default UserCredentialsDto;
