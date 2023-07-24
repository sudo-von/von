import vectorRules from '../vector-rules';

export const validateVectorAltLength = (alt: string) => {
  const altLength = alt.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = vectorRules.alt.content;
  return altLength >= MIN_LENGTH && altLength <= MAX_LENGTH;
};

export const validateVectorFileMimetype = (mimetype: string) => {
  const { ALLOWED_MIMETYPES } = vectorRules.mimetype.content;
  return ALLOWED_MIMETYPES.includes(mimetype);
};

export const validateVectorFileSize = (size: number) => {
  const { MIN_BYTES, MAX_BYTES } = vectorRules.size.content;
  return size >= MIN_BYTES && size <= MAX_BYTES;
};
