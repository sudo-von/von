import experienceRules from '../experience-rules';

export const validateExperienceTitle = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = experienceRules.title;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateExperienceDescription = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = experienceRules.description;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
