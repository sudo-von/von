import aboutRules from '../about-rules';

export const validateAboutTitle = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = aboutRules.title;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateAboutDescription = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = aboutRules.description;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
