import avatarRules from '../avatar-rules';

export const validateFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = avatarRules.mimetype;
  return ALLOWED_MIMETYPES.includes(mimetype.toLowerCase());
};

export const validateFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = avatarRules.size;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
