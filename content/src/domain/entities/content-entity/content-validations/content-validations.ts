import contentRules from '../content-rules';

export const validateTitleLength = (title: string) => {
  const titleLength = title.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = contentRules.title.content;
  return titleLength >= MIN_LENGTH && titleLength <= MAX_LENGTH;
};

export const validateTypeLength = (type: string) => {
  const typeLength = type.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = contentRules.type.content;
  return typeLength >= MIN_LENGTH && typeLength <= MAX_LENGTH;
};

export const validateSubtitleLength = (subtitle: string) => {
  const subtitleLength = subtitle.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = contentRules.subtitle.content;
  return subtitleLength >= MIN_LENGTH && subtitleLength <= MAX_LENGTH;
};

export const validateDescriptionLength = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = contentRules.description.content;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};
