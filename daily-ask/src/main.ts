import configureUsecases from './infrastructure/config/configure-usecases';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
import configureScheduledTasks from './infrastructure/config/configure-scheduled-tasks';
import configureWebScraperServices from './infrastructure/config/configure-web-scrapers';
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

    /* 📖 Usecases. */
    const {
      questionUsecase,
    } = configureUsecases();
    loggerService.info('📖 Usecases have been configured.');

    /* 🔧 Services. */
    const {
      topicsWebScraperService,
      startersWebScraperService,
      generatorWebScrapperService,
    } = configureWebScraperServices(loggerService);
    loggerService.info('🧩 Web scraper services have been configured.');

    /* 📦 Message brokers. */
    const {
      createQuestionProducer,
    } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    /* ⏰ Scheduled tasks. */
    await configureScheduledTasks(
      createQuestionProducer,
      loggerService,
      questionUsecase,
      topicsWebScraperService,
      startersWebScraperService,
      generatorWebScrapperService,
    );
    loggerService.info('⏰ Scheduled tasks have been configured.');
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
