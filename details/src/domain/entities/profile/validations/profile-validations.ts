import profileRules from '../profile-rules';

export const validateProfileQuote = (quote: string) => {
  const quoteLength = quote.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.quote;
  return quoteLength >= MIN_LENGTH && quoteLength <= MAX_LENGTH;
};

export const validateProfilePosition = (position: string) => {
  const positionLength = position.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.position;
  return positionLength >= MIN_LENGTH && positionLength <= MAX_LENGTH;
};

export const validateProfileInterest = (interest: string) => {
  const interestLength = interest.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = profileRules.interest;
  return interestLength >= MIN_LENGTH && interestLength <= MAX_LENGTH;
};
