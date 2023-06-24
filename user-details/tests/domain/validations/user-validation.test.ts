import { describe, it, expect } from '@jest/globals';
import {
  validateName,
  validateQuote,
  validatePosition,
  validateInterest,
  validateProfilePicture,
  profileRules,
} from '../../../src/domain/entities/validations/profile-validations';

describe('profile validation', () => {
  describe('when minimum length is validated', () => {
    it('should return true when name is valid', () => {
      const name = 'a'.repeat(profileRules.name.MIN_LENGTH);
      const isValid = validateName(name);
      expect(isValid).toBeTruthy();
    });

    it('should return true when quote is valid', () => {
      const quote = 'a'.repeat(profileRules.quote.MIN_LENGTH);
      const isValid = validateQuote(quote);
      expect(isValid).toBeTruthy();
    });

    it('should return true when position is valid', () => {
      const position = 'a'.repeat(profileRules.position.MIN_LENGTH);
      const isValid = validatePosition(position);
      expect(isValid).toBeTruthy();
    });

    it('should return true when interest is valid', () => {
      const interest = 'a'.repeat(profileRules.interest.MIN_LENGTH);
      const isValid = validateInterest(interest);
      expect(isValid).toBeTruthy();
    });

    it('should return true when profile picture is valid', () => {
      const profilePicture = 'a'.repeat(profileRules.profilePicture.MIN_LENGTH);
      const isValid = validateProfilePicture(profilePicture);
      expect(isValid).toBeTruthy();
    });
  });
});
