import configureUsecases from './application/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express/config';
import configureTokenService from './infrastructure/services/token-service/config';
import configureLoggerService from './infrastructure/services/logger-service/config';
import configureSecurityService from './infrastructure/services/security-service/config';
import configureUserRouter from './infrastructure/controllers/express/user-controller/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureAuthenticationRouter from './infrastructure/controllers/express/authentication-controller/authentication-router';
import configureFileService from './infrastructure/services/file-service/config';

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
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 💽 Repositories. */
    const {
      userRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );
    loggerService.info('💽 Repositories have been configured.');

    /* 🔧 Services. */
    const tokenService = configureTokenService(SECRET_KEY);
    loggerService.info('🔧 Token service has been configured.');
    const securityService = configureSecurityService(loggerService);
    loggerService.info('🔧 Security service has been configured.');
    const fileService = configureFileService(`${__dirname}/application`, loggerService);
    loggerService.info('🔧 File service has been configured.');

    /* 📖 Usecases. */
    const {
      userUsecase,
      authenticationUsecase,
    } = configureUsecases(
      fileService,
      userRepository,
      securityService,
    );
    loggerService.info('📖 Usecases have been configured.');

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
    loggerService.error('⛔️ An error occurred while configuring the application.', e as Error);
    process.exit(1);
  }
})();
