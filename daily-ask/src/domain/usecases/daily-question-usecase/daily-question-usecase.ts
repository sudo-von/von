import {
  CreateDailyQuestion,
} from '../../entities/daily-question-entity/daily-question-entities';
import ScraperService from '../../services/scraper-service/scraper-service';

/**
 * Abstract class representing a daily question use case.
 * @abstract
 */
abstract class DailyQuestionUsecase {
  /**
   * Creates an instance of DailyQuestionUsecase.
   * @constructor
   * @param {ScraperService} scraperService - The scraper service.
   */
  constructor(protected readonly scraperService: ScraperService) {}

  /**
   * Creates a daily question requested by an asker..
   * @param {string} askedBy - The name of the asker requesting the daily question.
   * @returns {CreateDailyQuestion} A promise with the created daily question.
   */
  abstract createDailyQuestion: (askedBy: string)
  => Promise<CreateDailyQuestion>;
}

export default DailyQuestionUsecase;
