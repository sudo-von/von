import configureUsecases from './infrastructure/config/configure-usecases';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureWebScraperServices from './infrastructure/config/configure-web-scrapers';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureScheduledTasks from './infrastructure/config/configure-scheduled-tasks';

const loggerService = configureLoggerService();
loggerService.info('📢󠀠ㅤLogger service has been configured.');

(async () => {
  try {
  /* 🔐󠀠ㅤEnvironment variables. */
    const {
      MESSAGE_BROKER_URL,
    } = configureEnvironmentVariables();
    loggerService.info('🔐󠀠ㅤEnvironment variables have been configured.');

    /* 📖󠀠ㅤUsecases. */
    const {
      questionUsecase,
    } = configureUsecases();
    loggerService.info('📖󠀠ㅤUsecases have been configured.');

    /* 🔧󠀠ㅤServices. */
    const {
      eslconversationWebScrapperService,
      questionsgeneratorWebScrapperService,
      conversationStartersWebScrapperService,
    } = configureWebScraperServices(loggerService);
    loggerService.info('🕷️󠀠ㅤWeb scraper services have been configured.');

    /* 📦󠀠ㅤMessage brokers. */
    const {
      createQuestionProducer,
    } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦󠀠ㅤMessage brokers have been configured.');

    /* 🗓️󠀠ㅤScheduled tasks. */
    await configureScheduledTasks(
      loggerService,
      questionUsecase,
      createQuestionProducer,
      conversationStartersWebScrapperService,
      eslconversationWebScrapperService,
      questionsgeneratorWebScrapperService,
    );
    loggerService.info('🗓️󠀠ㅤScheduled tasks have been configured.');
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
