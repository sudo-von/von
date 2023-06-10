import {
  MIN_POSITION_LENGTH,
  MAX_POSITION_LENGTH,
  MIN_INTEREST_LENGTH,
  MAX_INTEREST_LENGTH,
  MIN_QUOTE_LENGTH,
  MAX_QUOTE_LENGTH,
} from '../../constants';

export const validatePosition = (position: string) => {
  const positionLength = position.trim().length;
  return positionLength >= MIN_POSITION_LENGTH && positionLength <= MAX_POSITION_LENGTH;
};

export const validateInterest = (interest: string) => {
  const interestLength = interest.trim().length;
  return interestLength >= MIN_INTEREST_LENGTH && interestLength <= MAX_INTEREST_LENGTH;
};

export const validateQuote = (quote: string) => {
  const quoteLength = quote.trim().length;
  return quoteLength >= MIN_QUOTE_LENGTH && quoteLength <= MAX_QUOTE_LENGTH;
};
