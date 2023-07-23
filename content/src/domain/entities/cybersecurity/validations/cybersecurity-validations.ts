import cybersecurityRules from '../cybersecurity-rules';

export const validateCybersecurityTitle = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = cybersecurityRules.title;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateCybersecurityDescription = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = cybersecurityRules.description;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
