import {
  z,
} from 'zod';

export type RestrictedControllerUserDto = {
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture: string;
};

export const CreateControllerUserDto = z.object({
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
});

export const UpdateControllerUserDto = z.object({
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
});

export const CreateControllerUserCredentialsDto = z.object({
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
