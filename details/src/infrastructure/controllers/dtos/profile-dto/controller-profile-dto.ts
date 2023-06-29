import {
  z,
} from 'zod';

export type ControllerProfileDto = {
  id: string;
  quote: string;
  interest: string;
  username: string;
  position: string;
};

export const CreateControllerProfileDto = z.object({
  quote: z
    .string({
      required_error: 'quote field is required',
      invalid_type_error: 'quote field must be a string',
    })
    .trim(),
  interest: z
    .string({
      required_error: 'interest field is required',
      invalid_type_error: 'interest field must be a string',
    })
    .trim(),
  position: z
    .string({
      required_error: 'position field is required',
      invalid_type_error: 'position field must be a string',
    })
    .trim(),
});

export const UpdateControllerProfileDto = z.object({
  quote: z
    .string({
      required_error: 'quote field is required',
      invalid_type_error: 'quote field must be a string',
    })
    .trim(),
  interest: z
    .string({
      required_error: 'interest field is required',
      invalid_type_error: 'interest field must be a string',
    })
    .trim(),
  position: z
    .string({
      required_error: 'position field is required',
      invalid_type_error: 'position field must be a string',
    })
    .trim(),
});
