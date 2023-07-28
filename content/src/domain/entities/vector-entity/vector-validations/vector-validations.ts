import vectorRules from '../vector-rules';

export const validateVectorDescriptionLength = (description: string) => {
  const descriptionLength = description.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = vectorRules.description.content;
  return descriptionLength >= MIN_LENGTH && descriptionLength <= MAX_LENGTH;
};

export const validateVectorFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = vectorRules.mimetype.content;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateVectorFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = vectorRules.size.content;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
