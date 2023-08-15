import userDetailsRules from '../../../../../src/domain/entities/user-details-entity/user-details-rules';
import {
  validateQuoteLength,
  validateInterestLength,
  validatePositionLength,
} from '../../../../../src/domain/entities/user-details-entity/user-details-validations/user-details-validations';

describe('user details validations', () => {
  describe('user details field length validations', () => {
    describe('when minimum length is valid', () => {
      it('should return true when interest is validated', () => {
        const interest = 'a'.repeat(userDetailsRules.interest.MIN_LENGTH);
        expect(validateInterestLength(interest)).toBeTruthy();
      });

      it('should return true when position is validated', () => {
        const position = 'a'.repeat(userDetailsRules.position.MIN_LENGTH);
        expect(validatePositionLength(position)).toBeTruthy();
      });

      it('should return true when quote is validated', () => {
        const quote = 'a'.repeat(userDetailsRules.quote.MIN_LENGTH);
        expect(validateQuoteLength(quote)).toBeTruthy();
      });
    });

    describe('when maximum length is valid', () => {
      it('should return true when interest is validated', () => {
        const interest = 'a'.repeat(userDetailsRules.interest.MAX_LENGTH);
        expect(validateInterestLength(interest)).toBeTruthy();
      });

      it('should return true when position is validated', () => {
        const position = 'a'.repeat(userDetailsRules.position.MAX_LENGTH);
        expect(validatePositionLength(position)).toBeTruthy();
      });

      it('should return true when quote is validated', () => {
        const quote = 'a'.repeat(userDetailsRules.quote.MAX_LENGTH);
        expect(validateQuoteLength(quote)).toBeTruthy();
      });
    });

    describe('when minimum length is invalid', () => {
      it('should return false when interest is validated', () => {
        const interest = 'a'.repeat(userDetailsRules.interest.MIN_LENGTH - 1);
        expect(validateInterestLength(interest)).toBeFalsy();
      });

      it('should return false when position is validated', () => {
        const position = 'a'.repeat(userDetailsRules.position.MIN_LENGTH - 1);
        expect(validatePositionLength(position)).toBeFalsy();
      });

      it('should return false when quote is validated', () => {
        const quote = 'a'.repeat(userDetailsRules.quote.MIN_LENGTH - 1);
        expect(validateQuoteLength(quote)).toBeFalsy();
      });
    });

    describe('when maximum length is invalid', () => {
      it('should return false when interest is validated', () => {
        const interest = 'a'.repeat(userDetailsRules.interest.MAX_LENGTH + 1);
        expect(validateInterestLength(interest)).toBeFalsy();
      });

      it('should return false when position is validated', () => {
        const position = 'a'.repeat(userDetailsRules.position.MAX_LENGTH + 1);
        expect(validatePositionLength(position)).toBeFalsy();
      });

      it('should return false when quote is validated', () => {
        const quote = 'a'.repeat(userDetailsRules.quote.MAX_LENGTH + 1);
        expect(validateQuoteLength(quote)).toBeFalsy();
      });
    });
  });
});
