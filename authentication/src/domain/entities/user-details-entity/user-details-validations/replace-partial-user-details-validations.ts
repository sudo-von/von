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
  const formattedPosition = payload.position ? payload.position.trim() : '';
  const formattedInterest = payload.interest ? payload.interest.trim() : '';
  const formattedQuote = payload.quote ? payload.quote.trim() : '';

  const isPositionLengthValid = validatePositionLength(formattedPosition);
  if (!isPositionLengthValid) throw InvalidPositionLengthError;

  const isInterestLengthValid = validateInterestLength(formattedInterest);
  if (!isInterestLengthValid) throw InvalidInterestLengthError;

  const isQuoteLengthValid = validateQuoteLength(formattedQuote);
  if (!isQuoteLengthValid) throw InvalidQuoteLengthError;
};

export default validatePartialUserDetailsReplacement;
