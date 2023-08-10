import socialNetworkRules from '../social-network-rules';

export const validateFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = socialNetworkRules.mimetype;
  return ALLOWED_MIMETYPES.includes(mimetype.toLowerCase());
};

export const validateFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = socialNetworkRules.size;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};

export const validateNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = socialNetworkRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateUrlLength = (url: string) => {
  const urlLength = url.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = socialNetworkRules.url;
  return urlLength >= MIN_LENGTH && urlLength <= MAX_LENGTH;
};
