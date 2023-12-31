import {
  InvalidQuoteLengthError,
  InvalidInterestLengthError,
  InvalidPositionLengthError,
} from '../user-details-errors';
import {
  ReplacePartialUserDetails,
} from '../user-details-entities';
import {
  validateQuoteLength,
  validateInterestLength,
  validatePositionLength,
} from './user-details-validations';

const validatePartialUserDetailsReplacement = (payload: ReplacePartialUserDetails) => {
  const position = payload.position ? payload.position.trim() : '';
  const interest = payload.interest ? payload.interest.trim() : '';
  const quote = payload.quote ? payload.quote.trim() : '';

  const isPositionLengthValid = validatePositionLength(position);
  if (!isPositionLengthValid) throw InvalidPositionLengthError;

  const isInterestLengthValid = validateInterestLength(interest);
  if (!isInterestLengthValid) throw InvalidInterestLengthError;

  const isQuoteLengthValid = validateQuoteLength(quote);
  if (!isQuoteLengthValid) throw InvalidQuoteLengthError;
};

export default validatePartialUserDetailsReplacement;
