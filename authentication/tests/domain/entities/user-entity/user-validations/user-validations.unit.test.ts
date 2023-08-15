import userRules from '../../../../../src/domain/entities/user-entity/user-rules';
import {
  validateNameLength,
  validateEmailLength,
  validatePasswordLength,
  validateUsernameLength,
} from '../../../../../src/domain/entities/user-entity/user-validations/user-validations';

describe('user validations', () => {
  describe('when minimum length is valid', () => {
    it('should return true when email is validated', () => {
      const email = 'a'.repeat(userRules.email.MIN_LENGTH);
      expect(validateEmailLength(email)).toBeTruthy();
    });

    it('should return true when name is validated', () => {
      const name = 'a'.repeat(userRules.name.MIN_LENGTH);
      expect(validateNameLength(name)).toBeTruthy();
    });

    it('should return true when password is validated', () => {
      const password = 'a'.repeat(userRules.password.MIN_LENGTH);
      expect(validatePasswordLength(password)).toBeTruthy();
    });

    it('should return true when username is validated', () => {
      const username = 'a'.repeat(userRules.username.MIN_LENGTH);
      expect(validateUsernameLength(username)).toBeTruthy();
    });
  });

  describe('when maximum length is valid', () => {
    it('should return true when email is validated', () => {
      const email = 'a'.repeat(userRules.email.MAX_LENGTH);
      expect(validateEmailLength(email)).toBeTruthy();
    });

    it('should return true when name is validated', () => {
      const name = 'a'.repeat(userRules.name.MAX_LENGTH);
      expect(validateNameLength(name)).toBeTruthy();
    });

    it('should return true when password is validated', () => {
      const password = 'a'.repeat(userRules.password.MAX_LENGTH);
      expect(validatePasswordLength(password)).toBeTruthy();
    });

    it('should return true when username is validated', () => {
      const username = 'a'.repeat(userRules.username.MAX_LENGTH);
      expect(validateUsernameLength(username)).toBeTruthy();
    });
  });

  describe('when minimum length is invalid', () => {
    it('should return false when email is validated', () => {
      const email = 'a'.repeat(userRules.email.MIN_LENGTH - 1);
      expect(validateEmailLength(email)).toBeFalsy();
    });

    it('should return false when name is validated', () => {
      const name = 'a'.repeat(userRules.name.MIN_LENGTH - 1);
      expect(validateNameLength(name)).toBeFalsy();
    });

    it('should return false when password is validated', () => {
      const password = 'a'.repeat(userRules.password.MIN_LENGTH - 1);
      expect(validatePasswordLength(password)).toBeFalsy();
    });

    it('should return false when username is validated', () => {
      const username = 'a'.repeat(userRules.username.MIN_LENGTH - 1);
      expect(validateUsernameLength(username)).toBeFalsy();
    });
  });

  describe('when maximum length is invalid', () => {
    it('should return false when email is validated', () => {
      const email = 'a'.repeat(userRules.email.MAX_LENGTH + 1);
      expect(validateEmailLength(email)).toBeFalsy();
    });

    it('should return false when name is validated', () => {
      const name = 'a'.repeat(userRules.name.MAX_LENGTH + 1);
      expect(validateNameLength(name)).toBeFalsy();
    });

    it('should return false when password is validated', () => {
      const password = 'a'.repeat(userRules.password.MAX_LENGTH + 1);
      expect(validatePasswordLength(password)).toBeFalsy();
    });

    it('should return false when username is validated', () => {
      const username = 'a'.repeat(userRules.username.MAX_LENGTH + 1);
      expect(validateUsernameLength(username)).toBeFalsy();
    });
  });
});
