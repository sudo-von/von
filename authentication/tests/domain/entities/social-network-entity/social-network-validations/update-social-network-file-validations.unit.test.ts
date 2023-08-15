import {
  InvalidSocialNetworkFileSizeError,
  InvalidSocialNetworkUrlLengthError,
  InvalidSocialNetworkNameLengthError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../../../../../src/domain/entities/social-network-entity/social-network-errors';
import {
  UpdateSocialNetworkFile,
} from '../../../../../src/domain/entities/social-network-entity/social-network-entities';
import {
  validateFileSizeMock,
  validateUrlLengthMock,
  validateNameLengthMock,
  validateFileMimetypeMock,
} from '../../../../__mocks__/domain/entities/social-network-entity/social-network-validations/social-network-validations-mocks';
import validateSocialNetworkFileUpdate from '../../../../../src/domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations';

jest.mock('../../../../../src/domain/entities/social-network-entity/social-network-validations/social-network-validations', () => ({
  validateFileMimetype: validateFileMimetypeMock,
  validateFileSize: validateFileSizeMock,
  validateNameLength: validateNameLengthMock,
  validateUrlLength: validateUrlLengthMock,
}));

describe('update social network file validations', () => {
  const payload: UpdateSocialNetworkFile = {
    url: '',
    name: '',
    size: 0,
    mimetype: '',
    buffer: Buffer.from([]),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when social network file is valid', () => {
    it('should not throw an exception', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateUrlLengthMock.mockImplementationOnce(() => true);

      expect(() => validateSocialNetworkFileUpdate(payload)).not.toThrow();

      expect(validateFileMimetypeMock).toBeCalledWith(payload.mimetype);
      expect(validateFileSizeMock).toBeCalledWith(payload.size);
      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateUrlLengthMock).toBeCalledWith(payload.url);

      expect(validateFileMimetypeMock).toBeCalledTimes(1);
      expect(validateFileSizeMock).toBeCalledTimes(1);
      expect(validateNameLengthMock).toBeCalledTimes(1);
      expect(validateUrlLengthMock).toBeCalledTimes(1);
    });
  });

  describe('when social network file is invalid', () => {
    it('should throw a specific exception when mimetype is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => false);

      expect(() => validateSocialNetworkFileUpdate(payload))
        .toThrowError(InvalidSocialNetworkFileMimeTypeError);
      expect(validateFileMimetypeMock).toBeCalledWith(payload.mimetype);
      expect(validateFileMimetypeMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when size is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => false);

      expect(() => validateSocialNetworkFileUpdate(payload))
        .toThrowError(InvalidSocialNetworkFileSizeError);
      expect(validateFileSizeMock).toBeCalledWith(payload.size);
      expect(validateFileSizeMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when name is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => false);

      expect(() => validateSocialNetworkFileUpdate(payload))
        .toThrowError(InvalidSocialNetworkNameLengthError);
      expect(validateNameLengthMock).toBeCalledWith(payload.name);
      expect(validateNameLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when url is invalid', () => {
      validateFileMimetypeMock.mockImplementationOnce(() => true);
      validateFileSizeMock.mockImplementationOnce(() => true);
      validateNameLengthMock.mockImplementationOnce(() => true);
      validateUrlLengthMock.mockImplementationOnce(() => false);

      expect(() => validateSocialNetworkFileUpdate(payload))
        .toThrowError(InvalidSocialNetworkUrlLengthError);
      expect(validateUrlLengthMock).toBeCalledWith(payload.url);
      expect(validateUrlLengthMock).toBeCalledTimes(1);
    });
  });
});
