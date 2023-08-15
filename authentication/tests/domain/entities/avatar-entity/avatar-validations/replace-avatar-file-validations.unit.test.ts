import {
  InvalidAvatarFileSizeError,
  InvalidAvatarFileMimeTypeError,
} from '../../../../../src/domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../../../../src/domain/entities/avatar-entity/avatar-entities';
import {
  validateFileSizeMock,
  validateFileMimetypeMock,
} from '../../../../__mocks__/domain/entities/avatar-entity/avatar-validations/avatar-validations-mocks';
import validateAvatarFileReplacement from '../../../../../src/domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations';

jest.mock('../../../../../src/domain/entities/avatar-entity/avatar-validations/avatar-validations', () => ({
  validateFileMimetype: validateFileMimetypeMock,
  validateFileSize: validateFileSizeMock,
}));

describe('replace avatar file validations', () => {
  const payload: ReplaceAvatarFile = {
    size: 0,
    mimetype: '',
    buffer: Buffer.from([]),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when avatar file is valid', () => {
    it('should not throw an exception', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => true);

      expect(() => validateAvatarFileReplacement(payload)).not.toThrow();

      expect(validateFileMimetypeMock).toBeCalledWith(payload.mimetype);
      expect(validateFileSizeMock).toBeCalledWith(payload.size);

      expect(validateFileMimetypeMock).toBeCalledTimes(1);
      expect(validateFileSizeMock).toBeCalledTimes(1);
    });
  });

  describe('when avatar file is invalid', () => {
    it('should throw a specific exception when mimetype is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => false);

      expect(() => validateAvatarFileReplacement(payload))
        .toThrowError(InvalidAvatarFileMimeTypeError);
      expect(validateFileMimetypeMock).toBeCalledWith(payload.mimetype);
      expect(validateFileMimetypeMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when size is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => false);

      expect(() => validateAvatarFileReplacement(payload))
        .toThrowError(InvalidAvatarFileSizeError);
      expect(validateFileSizeMock).toBeCalledWith(payload.size);
      expect(validateFileSizeMock).toBeCalledTimes(1);
    });
  });
});
