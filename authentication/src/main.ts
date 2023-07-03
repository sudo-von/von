import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express/config';
import configureTokenService from './infrastructure/services/token-service/config';
import configureLoggerService from './infrastructure/services/logger-service/config';
import configureUserRouter from './infrastructure/controllers/express/user-controller/config';
import configureCryptographyService from './infrastructure/services/cryptography-service/config';
import configureAuthenticationRouter from './infrastructure/controllers/express/authentication-controller/authentication-router';

const loggerService = configureLoggerService();

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
    } = configureEnvironmentVariables(loggerService);

    /* 💽 Repositories. */
    const {
      userRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      loggerService,
    );

    /* 🔧 Services. */
    const tokenService = configureTokenService(SECRET_KEY, loggerService);
    const cryptographyService = configureCryptographyService(loggerService);

    /* 📖 Usecases. */
    const {
      // userUsecase,
      authenticationUsecase,
    } = configureUsecases(loggerService, userRepository, cryptographyService);

    /* 📦 Message brokers. */
    const {
      createUserProducer,
      updateUserProducer,
    } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);

    /* 🔌 Routers. */
    // const userRouter = configureUserRouter(
    //   userUsecase,
    //   tokenService,
    //   loggerService,
    //   userRepository,
    //   updateUserProducer,
    // );
    const authenticationRouter = configureAuthenticationRouter(
      tokenService,
      loggerService,
      authenticationUsecase,
      createUserProducer,
    );

    /* 🚀 Controllers. */
    await configureControllers(
      SERVER_PORT,
      // userRouter,
      authenticationRouter,
      loggerService,
    );
  } catch (e) {
    loggerService.error(e as Error, '⛔️ An error occurred while configuring the application.');
    process.exit(1);
  }
})();
