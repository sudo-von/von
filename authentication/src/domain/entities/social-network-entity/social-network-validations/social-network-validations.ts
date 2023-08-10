import socialNetworkRules from '../social-network-rules';

export const validateSocialNetworkFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = socialNetworkRules.mimetype;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateSocialNetworkFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = socialNetworkRules.size;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
