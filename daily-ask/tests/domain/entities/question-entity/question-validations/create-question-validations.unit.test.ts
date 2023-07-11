import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../../../../../src/domain/entities/question-entity/question-errors';
import {
  CreateQuestion,
} from '../../../../../src/domain/entities/question-entity/question-entities';
import {
  questionValidationMocks,
  validateAskedByLengthMock,
  validateQuestionLengthMock,
} from '../../../../__mocks__/domain/entities/question-entity/question-validations/question-validations.mock';
import validateQuestionCreation from '../../../../../src/domain/entities/question-entity/question-validations/create-question-validations';

jest.mock('../../../../../src/domain/entities/question-entity/question-validations/question-validations', () => questionValidationMocks);

describe('create question validations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('when question is valid', () => {
    const validQuestion: CreateQuestion = {
      askedBy: 'valid-asked-by',
      question: 'valid-question',
    };

    it('should not throw an exception', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => true);
      validateQuestionLengthMock.mockImplementationOnce(() => true);

      expect(() => validateQuestionCreation(validQuestion)).not.toThrow();
    });
  });

  describe('when question is invalid', () => {
    const invalidQuestion: CreateQuestion = {
      askedBy: 'invalid-asked-by',
      question: 'invalid-question',
    };

    it('should throw a specific exception askedBy is validated', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => false);

      expect(() => validateQuestionCreation(invalidQuestion))
        .toThrowError(InvalidAskedByLengthError);
      expect(validateAskedByLengthMock).toBeCalledTimes(1);
      expect(validateAskedByLengthMock).toBeCalledWith(invalidQuestion.askedBy);
    });

    it('should throw a specific exception question is validated', () => {
      validateAskedByLengthMock.mockImplementationOnce(() => true);
      validateQuestionLengthMock.mockImplementationOnce(() => false);

      expect(() => validateQuestionCreation(invalidQuestion))
        .toThrowError(InvalidQuestionLengthError);
      expect(validateQuestionLengthMock).toBeCalledTimes(1);
      expect(validateQuestionLengthMock).toBeCalledWith(invalidQuestion.question);
    });
  });
});
