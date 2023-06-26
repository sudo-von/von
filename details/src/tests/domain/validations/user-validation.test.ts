import {
  it,
  expect,
  describe,
} from '@jest/globals';
import {
  profileRules,
  validateQuote,
  validatePosition,
  validateInterest,
} from '../../../domain/validations/profile-validations';

describe('profile validation', () => {
  describe('when minimum length is valid', () => {
    it('should return true when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MIN_LENGTH);
      const isValid = validateQuote(quote);
      expect(isValid).toBeTruthy();
    });

    it('should return true when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MIN_LENGTH);
      const isValid = validatePosition(position);
      expect(isValid).toBeTruthy();
    });

    it('should return true when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MIN_LENGTH);
      const isValid = validateInterest(interest);
      expect(isValid).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MAX_LENGTH);
      const isValid = validateQuote(quote);
      expect(isValid).toBeTruthy();
    });

    it('should return true when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MAX_LENGTH);
      const isValid = validatePosition(position);
      expect(isValid).toBeTruthy();
    });

    it('should return true when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MAX_LENGTH);
      const isValid = validateInterest(interest);
      expect(isValid).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MIN_LENGTH - 1);
      const isValid = validateQuote(quote);
      expect(isValid).toBeFalsy();
    });

    it('should return false when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MIN_LENGTH - 1);
      const isValid = validatePosition(position);
      expect(isValid).toBeFalsy();
    });

    it('should return false when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MIN_LENGTH - 1);
      const isValid = validateInterest(interest);
      expect(isValid).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when quote is validated', () => {
      const quote = 'a'.repeat(profileRules.quote.MAX_LENGTH + 1);
      const isValid = validateQuote(quote);
      expect(isValid).toBeFalsy();
    });

    it('should return false when position is validated', () => {
      const position = 'a'.repeat(profileRules.position.MAX_LENGTH + 1);
      const isValid = validatePosition(position);
      expect(isValid).toBeFalsy();
    });

    it('should return false when interest is validated', () => {
      const interest = 'a'.repeat(profileRules.interest.MAX_LENGTH + 1);
      const isValid = validateInterest(interest);
      expect(isValid).toBeFalsy();
    });
  });
});
