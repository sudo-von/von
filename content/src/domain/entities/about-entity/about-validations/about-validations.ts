import aboutRules from '../about-rules';

export const validateAboutMediaUrlDomain = (url: string) => {
  const trimmedUrl = url.trim();
  const { ALLOWED_DOMAINS } = aboutRules.media.url.content;
  return ALLOWED_DOMAINS.some((domain) => trimmedUrl.startsWith(domain));
};

export const validateAboutMediaUrlLength = (url: string) => {
  const urlLength = url.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = aboutRules.media.url.content;
  return urlLength >= MIN_LENGTH && urlLength <= MAX_LENGTH;
};
