export const profileRules = {
  quote: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 100,
  },
  position: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 24,
  },
  interest: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 34,
  },
};

export const validateQuote = (quote: string) => {
  const quoteLength = quote.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.quote;
  return quoteLength >= MIN_LENGTH && quoteLength <= MAX_LENGTH;
};

export const validatePosition = (position: string) => {
  const positionLength = position.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.position;
  return positionLength >= MIN_LENGTH && positionLength <= MAX_LENGTH;
};

export const validateInterest = (interest: string) => {
  const interestLength = interest.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.interest;
  return interestLength >= MIN_LENGTH && interestLength <= MAX_LENGTH;
};
