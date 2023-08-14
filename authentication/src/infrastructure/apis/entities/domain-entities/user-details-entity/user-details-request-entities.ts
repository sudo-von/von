import {
  z,
} from 'zod';

const ReplaceUserDetailsRequest = z.object({
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

export default ReplaceUserDetailsRequest;
