import {
  CreateDailyQuestion,
} from '../../../src/domain/entities/daily-question-entity/daily-question-entities';
import ScraperServiceMock, {
  closeMock,
  scrapeMock,
  connectMock,
} from '../../__mocks__/domain/services/scraper-service/scraper-service-mocks';
import validateDailyQuestionCreationMock from '../../__mocks__/domain/entities/daily-question-entity/daily-question-validations/create-daily-question-validations-mocks';
import DailyQuestionUsecase from '../../../src/application/daily-question-usecase/daily-question-usecase';

jest.mock('../../../src/domain/entities/daily-question-entity/daily-question-validations/create-daily-question-validations', () => ({
  __esModule: true,
  default: validateDailyQuestionCreationMock,
}));

describe('daily question use case', () => {
  const scraperServiceMock = new ScraperServiceMock();

  const dailyQuestionUsecase = new DailyQuestionUsecase(
    scraperServiceMock,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('create daily question by asker', () => {
    const askedBy = 'fake-asker';

    const expectedDailyQuestion: CreateDailyQuestion = {
      askedBy: 'fake-asker',
      question: 'fake-question',
    };

    describe('when there is an unexpected error', () => {
      it('should close the scraper connection', async () => {
        connectMock.mockRejectedValueOnce(new Error());

        await expect(dailyQuestionUsecase.createDailyQuestion(askedBy))
          .rejects.toThrow();
        expect(connectMock).toBeCalledTimes(1);
        expect(closeMock).toBeCalledTimes(1);
      });
    });

    describe('when daily question is invalid', () => {
      it('should throw an exception', async () => {
        connectMock.mockResolvedValueOnce(null);
        scrapeMock.mockResolvedValueOnce('invalid-fake-question');
        validateDailyQuestionCreationMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(dailyQuestionUsecase.createDailyQuestion(askedBy))
          .rejects.toThrow();
        expect(connectMock).toBeCalledTimes(1);
        expect(scrapeMock).toBeCalledTimes(1);
        expect(validateDailyQuestionCreationMock).toBeCalledTimes(1);
        expect(closeMock).toBeCalledTimes(1);
      });
    });

    describe('when daily question is valid', () => {
      it('should return the expected daily question', async () => {
        connectMock.mockResolvedValueOnce(null);
        scrapeMock.mockResolvedValueOnce('fake-question');
        validateDailyQuestionCreationMock.mockImplementationOnce(() => null);

        await expect(dailyQuestionUsecase.createDailyQuestion(askedBy))
          .resolves.toEqual(expectedDailyQuestion);
        expect(connectMock).toBeCalledTimes(1);
        expect(scrapeMock).toBeCalledTimes(1);
        expect(validateDailyQuestionCreationMock).toBeCalledTimes(1);
        expect(closeMock).toBeCalledTimes(1);
      });
    });
  });
});
