import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidUsernameLengthError,
  InvalidPasswordLengthError,
  InvalidProfilePictureLengthError,
} from '../../../../src/domain/errors/user-error';
import {
  CreateUserEntity,
  UpdateUserEntity,
} from '../../../../src/domain/entities/user/user-entity';
import {
  validateEmailLength,
  validateNameLength,
  validateUserSignup,
  validateUserUpdate,
  validateUsernameLength,
  validatePasswordLength,
  validateProfilePictureLength,
} from '../../../../src/domain/entities/user/user-validations';
import userRules from '../../../../src/domain/entities/user/user-rules';

describe('user validations', () => {
  describe('user field length validations', () => {
    describe('when minimum length is valid', () => {
      it('should return true when name is validated', () => {
        const name = 'a'.repeat(userRules.name.MIN_LENGTH);
        expect(validateNameLength(name)).toBeTruthy();
      });

      it('should return true when email is validated', () => {
        const email = 'a'.repeat(userRules.email.MIN_LENGTH);
        expect(validateEmailLength(email)).toBeTruthy();
      });

      it('should return true when username is validated', () => {
        const username = 'a'.repeat(userRules.username.MIN_LENGTH);
        expect(validateUsernameLength(username)).toBeTruthy();
      });

      it('should return true when password is validated', () => {
        const password = 'a'.repeat(userRules.password.MIN_LENGTH);
        expect(validatePasswordLength(password)).toBeTruthy();
      });

      it('should return true when profile picture is validated', () => {
        const profilePicture = 'a'.repeat(userRules.profilePicture.MIN_LENGTH);
        expect(validateProfilePictureLength(profilePicture)).toBeTruthy();
      });
    });

    describe('when maximum length is valid', () => {
      it('should return true when name is validated', () => {
        const name = 'a'.repeat(userRules.name.MAX_LENGTH);
        expect(validateNameLength(name)).toBeTruthy();
      });

      it('should return true when email is validated', () => {
        const email = 'a'.repeat(userRules.email.MAX_LENGTH);
        expect(validateEmailLength(email)).toBeTruthy();
      });

      it('should return true when username is validated', () => {
        const username = 'a'.repeat(userRules.username.MAX_LENGTH);
        expect(validateUsernameLength(username)).toBeTruthy();
      });

      it('should return true when password is validated', () => {
        const password = 'a'.repeat(userRules.password.MAX_LENGTH);
        expect(validatePasswordLength(password)).toBeTruthy();
      });

      it('should return true when profile picture is validated', () => {
        const profilePicture = 'a'.repeat(userRules.profilePicture.MAX_LENGTH);
        expect(validateProfilePictureLength(profilePicture)).toBeTruthy();
      });
    });

    describe('when minimum length is invalid', () => {
      it('should return false when name is validated', () => {
        const name = 'a'.repeat(userRules.name.MIN_LENGTH - 1);
        expect(validateNameLength(name)).toBeFalsy();
      });

      it('should return false when email is validated', () => {
        const email = 'a'.repeat(userRules.email.MIN_LENGTH - 1);
        expect(validateEmailLength(email)).toBeFalsy();
      });

      it('should return false when username is validated', () => {
        const username = 'a'.repeat(userRules.username.MIN_LENGTH - 1);
        expect(validateUsernameLength(username)).toBeFalsy();
      });

      it('should return false when password is validated', () => {
        const password = 'a'.repeat(userRules.password.MIN_LENGTH - 1);
        expect(validatePasswordLength(password)).toBeFalsy();
      });

      it('should return false when profile picture is validated', () => {
        const profilePicture = 'a'.repeat(userRules.profilePicture.MIN_LENGTH - 1);
        expect(validateProfilePictureLength(profilePicture)).toBeFalsy();
      });
    });

    describe('when maximum length is invalid', () => {
      it('should return false when name is validated', () => {
        const name = 'a'.repeat(userRules.name.MAX_LENGTH + 1);
        expect(validateNameLength(name)).toBeFalsy();
      });

      it('should return false when email is validated', () => {
        const email = 'a'.repeat(userRules.email.MAX_LENGTH + 1);
        expect(validateEmailLength(email)).toBeFalsy();
      });

      it('should return false when username is validated', () => {
        const username = 'a'.repeat(userRules.username.MAX_LENGTH + 1);
        expect(validateUsernameLength(username)).toBeFalsy();
      });

      it('should return false when password is validated', () => {
        const password = 'a'.repeat(userRules.password.MAX_LENGTH + 1);
        expect(validatePasswordLength(password)).toBeFalsy();
      });

      it('should return false when profile picture is validated', () => {
        const profilePicture = 'a'.repeat(userRules.profilePicture.MAX_LENGTH + 1);
        expect(validateProfilePictureLength(profilePicture)).toBeFalsy();
      });
    });
  });

  describe('user signup validations', () => {
    describe('when minimum lengths are valid', () => {
      it('should not throw an exception', () => {
        const createUserEntity: CreateUserEntity = {
          name: 'a'.repeat(userRules.name.MIN_LENGTH),
          email: 'a'.repeat(userRules.email.MIN_LENGTH),
          username: 'a'.repeat(userRules.username.MIN_LENGTH),
          password: 'a'.repeat(userRules.password.MIN_LENGTH),
          profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH),
        };
        expect(() => validateUserSignup(createUserEntity)).not.toThrow();
      });
    });

    describe('when maximum lengths are valid', () => {
      it('should not throw an exception', () => {
        const createUserEntity: CreateUserEntity = {
          name: 'a'.repeat(userRules.name.MAX_LENGTH),
          email: 'a'.repeat(userRules.email.MAX_LENGTH),
          username: 'a'.repeat(userRules.username.MAX_LENGTH),
          password: 'a'.repeat(userRules.password.MAX_LENGTH),
          profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH),
        };
        expect(() => validateUserSignup(createUserEntity)).not.toThrow();
      });
    });

    describe('when minimum length is invalid', () => {
      const validCreateUserEntity: CreateUserEntity = {
        name: 'a'.repeat(userRules.name.MIN_LENGTH),
        email: 'a'.repeat(userRules.email.MIN_LENGTH),
        username: 'a'.repeat(userRules.username.MIN_LENGTH),
        password: 'a'.repeat(userRules.password.MIN_LENGTH),
        profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH),
      };

      it('should throw a specific exception when name is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          name: 'a'.repeat(userRules.name.MIN_LENGTH - 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidNameLengthError);
      });

      it('should throw a specific exception when email is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          email: 'a'.repeat(userRules.email.MIN_LENGTH - 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidEmailLengthError);
      });

      it('should throw a specific exception when username is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          username: 'a'.repeat(userRules.username.MIN_LENGTH - 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidUsernameLengthError);
      });

      it('should throw a specific exception when password is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          password: 'a'.repeat(userRules.password.MIN_LENGTH - 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidPasswordLengthError);
      });

      it('should throw a specific exception when profile picture is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH - 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidProfilePictureLengthError);
      });
    });

    describe('when maximum length is invalid', () => {
      const validCreateUserEntity: CreateUserEntity = {
        name: 'a'.repeat(userRules.name.MAX_LENGTH),
        email: 'a'.repeat(userRules.email.MAX_LENGTH),
        username: 'a'.repeat(userRules.username.MAX_LENGTH),
        password: 'a'.repeat(userRules.password.MAX_LENGTH),
        profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH),
      };

      it('should throw a specific exception when name is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          name: 'a'.repeat(userRules.name.MAX_LENGTH + 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidNameLengthError);
      });

      it('should throw a specific exception when email is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          email: 'a'.repeat(userRules.email.MAX_LENGTH + 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidEmailLengthError);
      });

      it('should throw a specific exception when username is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          username: 'a'.repeat(userRules.username.MAX_LENGTH + 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidUsernameLengthError);
      });

      it('should throw a specific exception when password is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          password: 'a'.repeat(userRules.password.MAX_LENGTH + 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidPasswordLengthError);
      });

      it('should throw a specific exception when profile picture is validated', () => {
        const invalidCreateUserEntity: CreateUserEntity = {
          ...validCreateUserEntity,
          profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH + 1),
        };
        expect(() => validateUserSignup(invalidCreateUserEntity))
          .toThrowError(InvalidProfilePictureLengthError);
      });
    });
  });

  describe('user update validations', () => {
    describe('when minimum lengths are valid', () => {
      it('should not throw an exception', () => {
        const updateUserEntity: UpdateUserEntity = {
          name: 'a'.repeat(userRules.name.MIN_LENGTH),
          email: 'a'.repeat(userRules.email.MIN_LENGTH),
          username: 'a'.repeat(userRules.username.MIN_LENGTH),
          password: 'a'.repeat(userRules.password.MIN_LENGTH),
          profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH),
        };
        expect(() => validateUserUpdate(updateUserEntity)).not.toThrow();
      });
    });

    describe('when maximum lengths are valid', () => {
      it('should not throw an exception', () => {
        const updateUserEntity: UpdateUserEntity = {
          name: 'a'.repeat(userRules.name.MAX_LENGTH),
          email: 'a'.repeat(userRules.email.MAX_LENGTH),
          username: 'a'.repeat(userRules.username.MAX_LENGTH),
          password: 'a'.repeat(userRules.password.MAX_LENGTH),
          profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH),
        };
        expect(() => validateUserUpdate(updateUserEntity)).not.toThrow();
      });
    });

    describe('when minimum length is invalid', () => {
      const validUpdateUserEntity: UpdateUserEntity = {
        name: 'a'.repeat(userRules.name.MIN_LENGTH),
        email: 'a'.repeat(userRules.email.MIN_LENGTH),
        username: 'a'.repeat(userRules.username.MIN_LENGTH),
        password: 'a'.repeat(userRules.password.MIN_LENGTH),
        profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH),
      };

      it('should throw a specific exception when name is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          name: 'a'.repeat(userRules.name.MIN_LENGTH - 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidNameLengthError);
      });

      it('should throw a specific exception when email is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          email: 'a'.repeat(userRules.email.MIN_LENGTH - 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidEmailLengthError);
      });

      it('should throw a specific exception when username is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          username: 'a'.repeat(userRules.username.MIN_LENGTH - 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidUsernameLengthError);
      });

      it('should throw a specific exception when password is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          password: 'a'.repeat(userRules.password.MIN_LENGTH - 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidPasswordLengthError);
      });

      it('should throw a specific exception when profile picture is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          profilePicture: 'a'.repeat(userRules.profilePicture.MIN_LENGTH - 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidProfilePictureLengthError);
      });
    });

    describe('when maximum length is invalid', () => {
      const validUpdateUserEntity: UpdateUserEntity = {
        name: 'a'.repeat(userRules.name.MAX_LENGTH),
        email: 'a'.repeat(userRules.email.MAX_LENGTH),
        username: 'a'.repeat(userRules.username.MAX_LENGTH),
        password: 'a'.repeat(userRules.password.MAX_LENGTH),
        profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH),
      };

      it('should throw a specific exception when name is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          name: 'a'.repeat(userRules.name.MAX_LENGTH + 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidNameLengthError);
      });

      it('should throw a specific exception when email is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          email: 'a'.repeat(userRules.email.MAX_LENGTH + 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidEmailLengthError);
      });

      it('should throw a specific exception when username is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          username: 'a'.repeat(userRules.username.MAX_LENGTH + 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidUsernameLengthError);
      });

      it('should throw a specific exception when password is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          password: 'a'.repeat(userRules.password.MAX_LENGTH + 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidPasswordLengthError);
      });

      it('should throw a specific exception when profile picture is validated', () => {
        const invalidUpdateUserEntity: UpdateUserEntity = {
          ...validUpdateUserEntity,
          profilePicture: 'a'.repeat(userRules.profilePicture.MAX_LENGTH + 1),
        };
        expect(() => validateUserUpdate(invalidUpdateUserEntity))
          .toThrowError(InvalidProfilePictureLengthError);
      });
    });
  });
});
