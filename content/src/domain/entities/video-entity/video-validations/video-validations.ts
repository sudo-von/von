import videoRules from '../video-rules';

export const validateAltLength = (alt: string) => {
  const altLength = alt.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = videoRules.alt.content;
  return altLength >= MIN_LENGTH && altLength <= MAX_LENGTH;
};

export const validateUrlLength = (url: string) => {
  const urlLength = url.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = videoRules.url.content;
  return urlLength >= MIN_LENGTH && urlLength <= MAX_LENGTH;
};
