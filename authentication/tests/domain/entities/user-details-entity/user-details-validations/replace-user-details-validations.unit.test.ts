import {
  InvalidQuoteLengthError,
  InvalidInterestLengthError,
  InvalidPositionLengthError,
} from '../../../../../src/domain/entities/user-details-entity/user-details-errors';
import {
  ReplaceUserDetails,
} from '../../../../../src/domain/entities/user-details-entity/user-details-entities';
import {
  validateQuoteLengthMock,
  validateInterestLengthMock,
  validatePositionLengthMock,
} from '../../../../__mocks__/domain/entities/user-details-entity/user-details-validations/user-details-validations-mocks';
import validateUserDetailsReplacement from '../../../../../src/domain/entities/user-details-entity/user-details-validations/replace-user-details-validations';

jest.mock('../../../../../src/domain/entities/user-details-entity/user-details-validations/user-details-validations', () => ({
  validateInterestLength: validateInterestLengthMock,
  validatePositionLength: validatePositionLengthMock,
  validateQuoteLength: validateQuoteLengthMock,
}));

describe('replace user details validations', () => {
  const payload: ReplaceUserDetails = {
    quote: '',
    interest: '',
    position: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when user details are valid', () => {
    it('should not throw an exception', () => {
      validateInterestLengthMock.mockImplementationOnce(() => true);
      validatePositionLengthMock.mockImplementationOnce(() => true);
      validateQuoteLengthMock.mockImplementationOnce(() => true);

      expect(() => validateUserDetailsReplacement(payload)).not.toThrow();

      expect(validateInterestLengthMock).toBeCalledWith(payload.interest);
      expect(validatePositionLengthMock).toBeCalledWith(payload.position);
      expect(validateQuoteLengthMock).toBeCalledWith(payload.quote);

      expect(validateInterestLengthMock).toBeCalledTimes(1);
      expect(validatePositionLengthMock).toBeCalledTimes(1);
      expect(validateQuoteLengthMock).toBeCalledTimes(1);
    });
  });

  describe('when user details are invalid', () => {
    it('should throw a specific exception when interest is invalid', () => {
      validateInterestLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserDetailsReplacement(payload))
        .toThrowError(InvalidInterestLengthError);
      expect(validateInterestLengthMock).toBeCalledWith(payload.interest);
      expect(validateInterestLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when position is invalid', () => {
      validateInterestLengthMock.mockImplementationOnce(() => true);
      validatePositionLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserDetailsReplacement(payload))
        .toThrowError(InvalidPositionLengthError);
      expect(validatePositionLengthMock).toBeCalledWith(payload.position);
      expect(validatePositionLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when quote is invalid', () => {
      validateInterestLengthMock.mockImplementationOnce(() => true);
      validatePositionLengthMock.mockImplementationOnce(() => true);
      validateQuoteLengthMock.mockImplementationOnce(() => false);

      expect(() => validateUserDetailsReplacement(payload))
        .toThrowError(InvalidQuoteLengthError);
      expect(validateQuoteLengthMock).toBeCalledWith(payload.quote);
      expect(validateQuoteLengthMock).toBeCalledTimes(1);
    });
  });
});
