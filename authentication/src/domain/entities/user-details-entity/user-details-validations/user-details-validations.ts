import userDetailsRules from '../user-details-rules';

export const validateInterestLength = (interest: string) => {
  const interestLength = interest.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userDetailsRules.interest;
  return interestLength >= MIN_LENGTH && interestLength <= MAX_LENGTH;
};

export const validatePositionLength = (position: string) => {
  const positionLength = position.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userDetailsRules.position;
  return positionLength >= MIN_LENGTH && positionLength <= MAX_LENGTH;
};

export const validateQuoteLength = (quote: string) => {
  const quoteLength = quote.trim().length;
  const { MIN_LENGTH, MAX_LENGTH } = userDetailsRules.quote;
  return quoteLength >= MIN_LENGTH && quoteLength <= MAX_LENGTH;
};
