import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userDetailsRules from './user-details-rules';

export const InvalidInterestLengthError = createDomainErrorFactory({
  code: 'INVALID_INTEREST_LENGTH',
  message: `Please provide an interest that consists of ${userDetailsRules.interest.MIN_LENGTH} to ${userDetailsRules.interest.MAX_LENGTH} characters.`,
});

export const InvalidPositionLengthError = createDomainErrorFactory({
  code: 'INVALID_POSITION_LENGTH',
  message: `Please provide a position that consists of ${userDetailsRules.position.MIN_LENGTH} to ${userDetailsRules.position.MAX_LENGTH} characters.`,
});

export const InvalidQuoteLengthError = createDomainErrorFactory({
  code: 'INVALID_QUOTE_LENGTH',
  message: `Please provide a quote that consists of ${userDetailsRules.quote.MIN_LENGTH} to ${userDetailsRules.quote.MAX_LENGTH} characters.`,
});

export const UserDetailsReplaceFailedError = createDomainErrorFactory({
  code: 'USER_DETAILS_REPLACE_FAILED',
  message: 'The user details you attempted to replace could not be replaced.',
});
