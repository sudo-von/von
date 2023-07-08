import configureServers from './infrastructure/config/configure-servers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureUserRouter from './infrastructure/servers/express-server/controllers/user-controller/user-router';
import configureQuestionRouter from './infrastructure/servers/express-server/controllers/question-controller/question-router';

const loggerService = configureLoggerService();
loggerService.info('📢 Logger service has been configured.');

(async () => {
  try {
  /* 🔐 Environment variables. */
    const {
      SECRET_KEY,
      SERVER_PORT,
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      MESSAGE_BROKER_URL,
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 💽 Repositories. */
    const {
      userRepository,
      questionRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );
    loggerService.info('💽 Repositories have been configured.');

    /* 🔧 Services. */
    const tokenService = configureTokenService(SECRET_KEY, loggerService);
    loggerService.info('🔑 Token service has been configured.');

    /* 📖 Usecases. */
    const {
      userUsecase,
      answerUsecase,
      metricUsecase,
      questionUsecase,
      answeredQuestionUsecase,
      unansweredQuestionUsecase,
    } = configureUsecases(userRepository, questionRepository);
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    await configureMessageBrokers(MESSAGE_BROKER_URL, userUsecase, loggerService, questionUsecase);
    loggerService.info('📦 Message brokers have been configured.');

    /* 🔌 Routers. */
    const userRouter = configureUserRouter(userUsecase);
    loggerService.info('🔌 User router has been configured.');
    const questionRouter = configureQuestionRouter(
      userUsecase,
      tokenService,
      loggerService,
      userRepository,
      questionUsecase,
    );
    loggerService.info('🔌 Question router has been configured.');

    /* 🚀 Controllers. */
    await configureServers(SERVER_PORT, userRouter, questionRouter, loggerService);
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
