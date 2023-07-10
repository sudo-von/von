import configureUsecases from './infrastructure/config/configure-usecases';
import configureCronJobs from './infrastructure/config/configure-cron-jobs';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureWebScraperService from './infrastructure/config/configure-web-scraper';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
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
    const { questionUsecase } = configureUsecases();
    loggerService.info('📖 Usecases have been configured.');

    /* 🔧 Services. */
    const {
      conversationStartersWebScrapper,
      eslconversationWebScrapperService,
      questionsgeneratorWebScrapperService,
    } = configureWebScraperService(loggerService);
    loggerService.info('🕷️󠀠ㅤWeb scraper services have been configured.');

    /* 📦 Message brokers. */
    const {
      createQuestionProducer,
    } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    configureCronJobs(
      questionUsecase,
      createQuestionProducer,
      conversationStartersWebScrapper,
      eslconversationWebScrapperService,
      questionsgeneratorWebScrapperService,
    );
    loggerService.info('⏰ Cron jobs have been configured.');
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
