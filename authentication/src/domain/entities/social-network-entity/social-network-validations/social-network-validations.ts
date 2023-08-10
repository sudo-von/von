import socialNetworkRules from '../social-network-rules';

export const validateSocialNetworkFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = socialNetworkRules.mimetype;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateSocialNetworkFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = socialNetworkRules.size;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};

export const validateSocialNetworkNameLength = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = socialNetworkRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};
