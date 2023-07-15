import avatarRules from '../avatar-rules';

export const validateAvatarFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = avatarRules.mimetype.content;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateAvatarFileNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = avatarRules.name.content;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateAvatarFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = avatarRules.size.content;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
