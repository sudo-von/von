import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import userDetailsRules from './user-details-rules';

export const InvalidQuoteLengthError = createDomainErrorFactory({
  code: 'INVALID_QUOTE_LENGTH',
  error: `Please provide a quote that consists of ${userDetailsRules.quote.content.MIN_LENGTH} to ${userDetailsRules.quote.content.MAX_LENGTH} characters.`,
});

export const InvalidInterestLengthError = createDomainErrorFactory({
  code: 'INVALID_INTEREST_LENGTH',
  error: `Please provide an interest that consists of ${userDetailsRules.interest.content.MIN_LENGTH} to ${userDetailsRules.interest.content.MAX_LENGTH} characters.`,
});

export const InvalidPositionLengthError = createDomainErrorFactory({
  code: 'INVALID_POSITION_LENGTH',
  error: `Please provide a position that consists of ${userDetailsRules.position.content.MIN_LENGTH} to ${userDetailsRules.position.content.MAX_LENGTH} characters.`,
});

export const UserDetailsReplacementFailedError = createDomainErrorFactory({
  code: 'USER_DETAILS_REPLACEMENT_FAILED',
  error: 'The user details you attempted to replace could not be replaced.',
});
