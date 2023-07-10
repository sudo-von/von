import cron from 'node-cron';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
// import configureQuestionServices from './infrastructure/config/configure-question-services';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureWebScraperService from './infrastructure/config/configure-web-scraper';

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
    const webScraperService = configureWebScraperService(loggerService);
    loggerService.info('🕷️󠀠ㅤWeb scraper service has been configured.');

    /* 📦 Message brokers. */
    // const {
    //   createQuestionProducer,
    // } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);
    // loggerService.info('📦 Message brokers have been configured.');

    cron.schedule('*/5 * * * * *', async () => {
      await webScraperService.connect();

      const scrappedQuestion = await webScraperService.scrape('https://www.conversationstarters.com/generator.php', '#random');

      questionUsecase.createQuestion({
        askedBy: 'eslconversationtopics',
        question: scrappedQuestion,
      });

      console.log({
        askedBy: 'eslconversationtopics',
        question: scrappedQuestion,
      });

      await webScraperService.close();
    });

    cron.schedule('*/5 * * * * *', async () => {
      await webScraperService.connect();

      const scrappedQuestion = await webScraperService.scrape('https://eslconversationtopics.com/random-question-generator/', '.the-question');

      questionUsecase.createQuestion({
        askedBy: 'eslconversationtopics',
        question: scrappedQuestion,
      });

      console.log({
        askedBy: 'eslconversationtopics',
        question: scrappedQuestion,
      });

      await webScraperService.close();
    });
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
