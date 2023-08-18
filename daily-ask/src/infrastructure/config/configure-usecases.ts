import ScraperService from '../services/scraper-service/scraper-service';
import DailyQuestionUsecaseApplication from '../../application/daily-question-usecase/daily-question-usecase';

const configureUsecases = (scrapperService: ScraperService) => {
  const questionUsecase = new DailyQuestionUsecaseApplication(scrapperService);

  return {
    questionUsecase,
  };
};

export default configureUsecases;
