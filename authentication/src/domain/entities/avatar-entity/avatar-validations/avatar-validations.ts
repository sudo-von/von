import avatarRules from '../avatar-rules';

export const validateAvatarFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = avatarRules.mimetype.content;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateAvatarFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = avatarRules.size.content;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
