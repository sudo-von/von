export const createAboutRules = {
  position: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 24,
  },
  interest: {
    MIN_LENGTH: 12,
    MAX_LENGTH: 34,
  },
  quote: {
    MIN_LENGTH: 14,
    MAX_LENGTH: 100,
  },
} as const;

export const validatePosition = (position: string) => {
  const positionLength = position.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createAboutRules.position;
  return positionLength >= MIN_LENGTH && positionLength <= MAX_LENGTH;
};

export const validateInterest = (interest: string) => {
  const interestLength = interest.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createAboutRules.interest;
  return interestLength >= MIN_LENGTH && interestLength <= MAX_LENGTH;
};

export const validateQuote = (quote: string) => {
  const quoteLength = quote.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = createAboutRules.quote;
  return quoteLength >= MIN_LENGTH && quoteLength <= MAX_LENGTH;
};
