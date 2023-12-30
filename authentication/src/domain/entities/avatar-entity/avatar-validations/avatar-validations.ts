import avatarRules from '../avatar-rules';

export const validateFileMimeType = (mimeType: string) => {
  const formattedMimeType = mimeType.trim().toLowerCase();
  const { ALLOWED_MIME_TYPES } = avatarRules.mimeType;
  return ALLOWED_MIME_TYPES.includes(formattedMimeType);
};

export const validateFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = avatarRules.size;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
