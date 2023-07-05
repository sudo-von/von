import {
  CreateUser,
} from '../../../../../src/domain/entities/user/user-entities';
import {
  validateNameLengthMock,
  validateEmailLengthMock,
  validateUsernameLengthMock,
  validatePasswordLengthMock,
} from '../../../../__mocks__/domain/entities/user/validations/user-validation-mocks';
import validateProfilePictureCreationMock from '../../../../__mocks__/domain/entities/profile-picture/validations/create-profile-picture-validation-mock';
import validateUserCreation from '../../../../../src/domain/entities/user/validations/create-user-validations';
import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidPasswordLengthError,
  InvalidUsernameLengthError,
} from '../../../../../src/domain/entities/user/user-errors';

jest.mock('../../../../../src/domain/entities/user/validations/user-validations', () => ({
  validateNameLength: validateNameLengthMock,
  validateEmailLength: validateEmailLengthMock,
  validateUsernameLength: validateUsernameLengthMock,
  validatePasswordLength: validatePasswordLengthMock,
}));

jest.mock('../../../../../src/domain/entities/profile-picture/validations/create-profile-picture-validations', () => ({
  __esModule: true,
  default: validateProfilePictureCreationMock,
}));

describe('create user validations', () => {
  const payload: CreateUser = {
    name: '',
    email: '',
    username: '',
    password: '',
    profilePicture: {
      buffer: Buffer.from(''),
      mimetype: '',
      name: '',
      size: 0,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when user is valid', () => {
    it('should not throw an exception', () => {
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => true);
      validatePasswordLengthMock.mockImplementationOnce(() => true);

      expect(() => validateUserCreation(payload)).not.toThrow();

      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateEmailLengthMock).toBeCalledWith(payload.email);
      expect(validateUsernameLengthMock).toBeCalledWith(payload.username);
      expect(validatePasswordLengthMock).toBeCalledWith(payload.password);
      expect(validateProfilePictureCreationMock).toBeCalledWith(payload.profilePicture);

      expect(validateNameLengthMock).toBeCalledTimes(1);
      expect(validateEmailLengthMock).toBeCalledTimes(1);
      expect(validateUsernameLengthMock).toBeCalledTimes(1);
      expect(validatePasswordLengthMock).toBeCalledTimes(1);
      expect(validateProfilePictureCreationMock).toBeCalledTimes(1);
    });
  });

  describe('when user is invalid', () => {
    it('should throw a specific exception when name is invalid', () => {
      validateNameLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserCreation(payload)).toThrowError(InvalidNameLengthError);
      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateNameLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when email is invalid', () => {
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateEmailLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserCreation(payload)).toThrowError(InvalidEmailLengthError);
      expect(validateEmailLengthMock).toBeCalledWith(payload.email);
      expect(validateEmailLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when username is invalid', () => {
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserCreation(payload)).toThrowError(InvalidUsernameLengthError);
      expect(validateUsernameLengthMock).toBeCalledWith(payload.username);
      expect(validateUsernameLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when password is invalid', () => {
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => true);
      validatePasswordLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserCreation(payload)).toThrowError(InvalidPasswordLengthError);
      expect(validatePasswordLengthMock).toBeCalledWith(payload.password);
      expect(validatePasswordLengthMock).toBeCalledTimes(1);
    });

    it('should throw an exception when profile picture is invalid', () => {
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => true);
      validatePasswordLengthMock.mockImplementationOnce(() => true);
      validateProfilePictureCreationMock.mockImplementationOnce(() => { throw new Error(); });

      expect(() => validateUserCreation(payload)).toThrow();
      expect(validateProfilePictureCreationMock).toBeCalledWith(payload.profilePicture);
      expect(validateProfilePictureCreationMock).toBeCalledTimes(1);
    });
  });
});
