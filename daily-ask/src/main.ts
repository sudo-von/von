import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureScraperService from './infrastructure/config/configure-scraper-service';
import configureSchedulerService from './infrastructure/config/configure-scheduler-service';
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
    const scraperService = configureScraperService();
    loggerService.info('🧩 Scraper service has been configured.');

    /* 📖 Usecases. */
    const {
      questionUsecase,
    } = configureUsecases(scraperService);
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Brokers. */
    const {
      createDailyQuestionProducer,
    } = await configureBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    /* 🔧 Sedulers. */
    await configureSchedulerService(loggerService, questionUsecase, createDailyQuestionProducer);
    loggerService.info('⏰ Shceduler service has been configured.');
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
