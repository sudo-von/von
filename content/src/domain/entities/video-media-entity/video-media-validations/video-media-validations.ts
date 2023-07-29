import videoRules from '../video-media-rules';

export const validateVideoMediaUrlDomain = (url: string) => {
  const trimmedUrl = url.trim();
  const { ALLOWED_DOMAINS } = videoRules.url.content;
  return ALLOWED_DOMAINS.some((domain) => trimmedUrl.startsWith(domain));
};

export const validateVideoMediaUrlLength = (url: string) => {
  const urlLength = url.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = videoRules.url.content;
  return urlLength >= MIN_LENGTH && urlLength <= MAX_LENGTH;
};
