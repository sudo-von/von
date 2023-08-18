import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../../../../../src/domain/entities/daily-question-entity/daily-question-errors';
import {
  CreateDailyQuestion,
} from '../../../../../src/domain/entities/daily-question-entity/daily-question-entities';
import {
  validateAskedByLengthMock,
  validateQuestionLengthMock,
} from '../../../../__mocks__/domain/entities/daily-question-entity/daily-question-validations/daily-question-validations-mocks';
import validateDailyQuestionCreation from '../../../../../src/domain/entities/daily-question-entity/daily-question-validations/create-daily-question-validations';

jest.mock('../../../../../src/domain/entities/daily-question-entity/daily-question-validations/daily-question-validations', () => ({
  validateAskedByLength: validateAskedByLengthMock,
  validateQuestionLength: validateQuestionLengthMock,
}));

describe('create daily question validations', () => {
  const payload: CreateDailyQuestion = {
    askedBy: '',
    question: '',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when daily question is valid', () => {
    it('should not throw an exception', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => true);
      validateQuestionLengthMock.mockImplementationOnce(() => true);

      expect(() => validateDailyQuestionCreation(payload)).not.toThrow();

      expect(validateAskedByLengthMock).toBeCalledWith(payload.askedBy);
      expect(validateQuestionLengthMock).toBeCalledWith(payload.question);

      expect(validateAskedByLengthMock).toBeCalledTimes(1);
      expect(validateQuestionLengthMock).toBeCalledTimes(1);
    });
  });

  describe('when daily question is invalid', () => {
    it('should throw a specific exception when asked by is invalid', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => false);

      expect(() => validateDailyQuestionCreation(payload)).toThrowError(InvalidAskedByLengthError);
      expect(validateAskedByLengthMock).toBeCalledWith(payload.askedBy);
      expect(validateAskedByLengthMock).toBeCalledTimes(1);
    });

    it('should throw a specific exception when question is invalid', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => true);
      validateQuestionLengthMock.mockImplementationOnce(() => false);

      expect(() => validateDailyQuestionCreation(payload)).toThrowError(InvalidQuestionLengthError);
      expect(validateQuestionLengthMock).toBeCalledWith(payload.question);
      expect(validateQuestionLengthMock).toBeCalledTimes(1);
    });
  });
});
