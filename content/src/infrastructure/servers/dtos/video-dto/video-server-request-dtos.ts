import {
  z,
} from 'zod';

const UpdateVideoMediaRequest = z.object({
  url: z
    .string({
      required_error: 'url field is required',
      invalid_type_error: 'url field must be a string',
    })
    .trim()
    .url('url field must contain a valid url'),
});

export default UpdateVideoMediaRequest;
