import cybersecurityRules from '../cybersecurity-rules';

export const validateCybersecurityMediaUrlDomain = (url: string) => {
  const trimmedUrl = url.trim();
  const { ALLOWED_DOMAINS } = cybersecurityRules.media.url.content;
  return ALLOWED_DOMAINS.some((domain) => trimmedUrl.startsWith(domain));
};

export const validateCybersecurityMediaUrlLength = (url: string) => {
  const urlLength = url.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = cybersecurityRules.media.url.content;
  return urlLength >= MIN_LENGTH && urlLength <= MAX_LENGTH;
};
