import ScraperService from '../../domain/services/scraper-service/scraper-service';
import DailyQuestionUsecaseApplication from '../../application/daily-question-usecase/daily-question-usecase';

const configureUsecases = (scraperService: ScraperService) => {
  const questionUsecase = new DailyQuestionUsecaseApplication(scraperService);

  return {
    questionUsecase,
  };
};

export default configureUsecases;
