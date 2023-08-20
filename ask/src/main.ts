import configureAPI from './infrastructure/config/configure-api';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureUserRouter from './infrastructure/apis/express-api/controllers/user-controller/user-router';
import configureAnswerRouter from './infrastructure/apis/express-api/controllers/answer-controller/answer-router';
import configureQuestionRouter from './infrastructure/apis/express-api/controllers/question-controller/question-router';
import configureAnsweredQuestionRouter from './infrastructure/apis/express-api/controllers/answered-question-controller/answered-question-router';
import configureUnansweredQuestionRouter from './infrastructure/apis/express-api/controllers/unanswered-question-controller/unanswered-question-router';

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
    const userRouter = configureUserRouter(userUsecase);
    loggerService.info('🔌 User router has been configured.');
    const answerRouter = configureAnswerRouter(
      tokenService,
      answerUsecase,
      userRepository,
    );
    loggerService.info('🔌 Answer router has been configured.');
    const questionRouter = configureQuestionRouter(
      tokenService,
      userRepository,
      questionUsecase,
    );
    loggerService.info('🔌 Question router has been configured.');
    const answeredQuestionRouter = configureAnsweredQuestionRouter(
      metricUsecase,
      answeredQuestionUsecase,
    );
    loggerService.info('🔌 Answered question router has been configured.');
    const unansweredQuestionRouter = configureUnansweredQuestionRouter(
      tokenService,
      userRepository,
      unansweredQuestionUsecase,
    );
    loggerService.info('🔌 Unanswered question router have been configured.');

    /* 🚀 Server. */
    await configureAPI(
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
