import {
  CreateQuestion,
} from '../../../src/domain/entities/question-entity/question-entities';
import {
  validateQuestionCreationMock,
  createQuestionValidationMocks,
} from '../../__mocks__/domain/entities/question-entity/question-validations/create-question-validations.mock';
import QuestionUsecaseApplication from '../../../src/application/question-usecase/question-usecase';

jest.mock('../../../src/domain/entities/question-entity/question-validations/create-question-validations', () => createQuestionValidationMocks);

const questionUsecase = new QuestionUsecaseApplication();

describe('question usecase validations', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('when createQuestion is called', () => {
    describe('when question is valid', () => {
      const validQuestion: CreateQuestion = {
        askedBy: 'valid-asked-by',
        question: 'valid-question',
      };

      it('should return the expected question', () => {
        expect(questionUsecase.createQuestion(validQuestion)).toEqual(validQuestion);
        expect(validateQuestionCreationMock).toBeCalledTimes(1);
        expect(validateQuestionCreationMock).toBeCalledWith(validQuestion);
      });
    });

    describe('when question is invalid', () => {
      const invalidQuestion: CreateQuestion = {
        askedBy: 'invalid-asked-by',
        question: 'invalid-question',
      };

      it('should throw an exception when validateQuestionCreation is called', () => {
        validateQuestionCreationMock.mockImplementationOnce(() => { throw new Error(); });

        expect(() => questionUsecase.createQuestion(invalidQuestion)).toThrow();
      });
    });
  });
});
