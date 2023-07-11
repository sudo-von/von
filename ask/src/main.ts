import configureServer from './infrastructure/config/configure-server';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureRouters from './infrastructure/config/configure-routers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';

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
    const tokenService = configureTokenService(SECRET_KEY);
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
    await configureBrokers(MESSAGE_BROKER_URL, userUsecase, loggerService, questionUsecase);
    loggerService.info('📦 Brokers have been configured.');

    /* 🔌 Routers. */
    const {
      userRouter,
      answerRouter,
      questionRouter,
      answeredQuestionRouter,
      unansweredQuestionRouter,
    } = configureRouters(
      userUsecase,
      answerUsecase,
      metricUsecase,
      questionUsecase,
      answeredQuestionUsecase,
      unansweredQuestionUsecase,
      tokenService,
      loggerService,
      userRepository,
    );
    loggerService.info('🔌 Routers have been configured.');

    /* 🚀 Server. */
    configureServer(
      SERVER_PORT,
      userRouter,
      answerRouter,
      questionRouter,
      answeredQuestionRouter,
      unansweredQuestionRouter,
      loggerService,
    );
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
