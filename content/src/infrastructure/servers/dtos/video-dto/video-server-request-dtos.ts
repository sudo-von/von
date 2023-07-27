import {
  z,
} from 'zod';

const UpdateVideoRequest = z.object({
  url: z
    .string({
      required_error: 'url field is required',
      invalid_type_error: 'url field must be a string',
    })
    .trim()
    .url('url field must be a valid url'),
});

export default UpdateVideoRequest;
