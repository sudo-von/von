import {
  validateQuote,
  validatePosition,
  validateInterest,
} from '../../../../../src/domain/entities/profile/validations/profile-validations';
import profileRules from '../../../../../src/domain/entities/profile/validations/profile-rules';

describe('profile validation', () => {
  describe('when minimum length is valid', () => {
    it('should return true when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MIN_LENGTH);
      const result = validateQuote(quote);
      expect(result).toBeTruthy();
    });

    it('should return true when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MIN_LENGTH);
      const result = validatePosition(position);
      expect(result).toBeTruthy();
    });

    it('should return true when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MIN_LENGTH);
      const result = validateInterest(interest);
      expect(result).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MAX_LENGTH);
      const result = validateQuote(quote);
      expect(result).toBeTruthy();
    });

    it('should return true when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MAX_LENGTH);
      const result = validatePosition(position);
      expect(result).toBeTruthy();
    });

    it('should return true when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MAX_LENGTH);
      const result = validateInterest(interest);
      expect(result).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MIN_LENGTH - 1);
      const result = validateQuote(quote);
      expect(result).toBeFalsy();
    });

    it('should return false when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MIN_LENGTH - 1);
      const result = validatePosition(position);
      expect(result).toBeFalsy();
    });

    it('should return false when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MIN_LENGTH - 1);
      const result = validateInterest(interest);
      expect(result).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MAX_LENGTH + 1);
      const result = validateQuote(quote);
      expect(result).toBeFalsy();
    });

    it('should return false when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MAX_LENGTH + 1);
      const result = validatePosition(position);
      expect(result).toBeFalsy();
    });

    it('should return false when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MAX_LENGTH + 1);
      const result = validateInterest(interest);
      expect(result).toBeFalsy();
    });
  });
});
