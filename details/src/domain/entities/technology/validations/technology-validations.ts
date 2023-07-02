import technologyRules from '../technology-rules';

export const validateTechnologyTitle = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = technologyRules.title;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateTechnologyDescription = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = technologyRules.description;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
