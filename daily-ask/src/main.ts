import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureScheduledTasks from './infrastructure/config/configure-scheduled-tasks';
import configureScraperService from './infrastructure/config/configure-scraper-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';

const loggerService = configureLoggerService();
loggerService.info('📢 Logger service has been configured.');

(async () => {
  try {
  /* 🔐 Environment variables. */
    const {
      MESSAGE_BROKER_URL,
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 🔧 Services. */
    const {
      questionScraperService,
    } = configureScraperService();
    loggerService.info('🧩 Scraper service has been configured.');

    /* 📖 Usecases. */
    const {
      questionUsecase,
    } = configureUsecases(questionScraperService);
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Brokers. */
    const {
      createDailyQuestionProducer,
    } = await configureBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    /* ⏰ Scheduled tasks. */
    await configureScheduledTasks(
      loggerService,
      questionUsecase,
      topicsWebScraperService,
      startersWebScraperService,
      generatorWebScraperService,
      createDailyQuestionProducer,
    );
    loggerService.info('⏰ Scheduled tasks have been configured.');
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
