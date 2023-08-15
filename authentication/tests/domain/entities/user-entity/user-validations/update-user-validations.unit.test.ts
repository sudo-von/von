import {
  InvalidNameLengthError,
  InvalidEmailLengthError,
  InvalidUsernameLengthError,
} from '../../../../../src/domain/entities/user-entity/user-errors';
import {
  CreateUser,
} from '../../../../../src/domain/entities/user-entity/user-entities';
import {
  validateNameLengthMock,
  validateEmailLengthMock,
  validateUsernameLengthMock,
} from '../../../../__mocks__/domain/entities/user-entity/user-validations/user-validations-mocks';
import validateUserUpdate from '../../../../../src/domain/entities/user-entity/user-validations/update-user-validations';

jest.mock('../../../../../src/domain/entities/user-entity/user-validations/user-validations', () => ({
  validateEmailLength: validateEmailLengthMock,
  validateNameLength: validateNameLengthMock,
  validateUsernameLength: validateUsernameLengthMock,
}));

describe('update user validations', () => {
  const payload: CreateUser = {
    name: '',
    email: '',
    username: '',
    password: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when user is valid', () => {
    it('should not throw an exception', () => {
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => true);

      expect(() => validateUserUpdate(payload)).not.toThrow();

      expect(validateEmailLengthMock).toBeCalledWith(payload.email);
      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateUsernameLengthMock).toBeCalledWith(payload.username);

      expect(validateEmailLengthMock).toBeCalledTimes(1);
      expect(validateNameLengthMock).toBeCalledTimes(1);
      expect(validateUsernameLengthMock).toBeCalledTimes(1);
    });
  });

  describe('when user is invalid', () => {
    it('should throw a specific exception when email is invalid', () => {
      validateEmailLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserUpdate(payload)).toThrowError(InvalidEmailLengthError);
      expect(validateEmailLengthMock).toBeCalledWith(payload.email);
      expect(validateEmailLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when name is invalid', () => {
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserUpdate(payload)).toThrowError(InvalidNameLengthError);
      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateNameLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when username is invalid', () => {
      validateEmailLengthMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateUsernameLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserUpdate(payload)).toThrowError(InvalidUsernameLengthError);
      expect(validateUsernameLengthMock).toBeCalledWith(payload.username);
      expect(validateUsernameLengthMock).toBeCalledTimes(1);
    });
  });
});
