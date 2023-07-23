import companyRules from '../company-rules';

export const validateCompanyName = (name: string) => {
  const nameLength = name.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = companyRules.name;
  return nameLength >= MIN_LENGTH && nameLength <= MAX_LENGTH;
};

export const validateCompanyPosition = (position: string) => {
  const positionLength = position.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = companyRules.position;
  return positionLength >= MIN_LENGTH && positionLength <= MAX_LENGTH;
};
