import introductionRules from '../introduction-rules';

export const validateIntroductionTitle = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = introductionRules.title;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateIntroductionDescription = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = introductionRules.description;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
