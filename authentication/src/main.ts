import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config/configure-enviroment-variables';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureMessageBrokers from './infrastructure/config/configure-message-brokers';
import configureControllers from './infrastructure/controllers/express/config';
import configureFileService from './infrastructure/config/configure-file-service';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureSecurityService from './infrastructure/config/configure-security-service';
import configureUserRouter from './infrastructure/controllers/express/user-controller/config';
import configureAuthenticationRouter from './infrastructure/controllers/express/authentication-controller/authentication-router';

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
    const securityService = configureSecurityService(loggerService);
    loggerService.info('🔒 Security service has been configured.');
    const fileService = configureFileService(loggerService);
    loggerService.info('📂 File service has been configured.');

    /* 📖 Usecases. */
    const {
      userUsecase,
      authenticationUsecase,
    } = configureUsecases(fileService, userRepository, securityService);
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    const {
      createUserProducer,
      updateUserProducer,
    } = await configureMessageBrokers(MESSAGE_BROKER_URL, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    /* 🔌 Routers. */
    const userRouter = configureUserRouter(
      userUsecase,
      tokenService,
      loggerService,
      userRepository,
      updateUserProducer,
    );
    loggerService.info('🔌 User router has been configured.');
    const authenticationRouter = configureAuthenticationRouter(
      tokenService,
      authenticationUsecase,
      createUserProducer,
    );
    loggerService.info('🔌 Authentication router has been configured.');

    /* 🚀 Controllers. */
    await configureControllers(
      SERVER_PORT,
      userRouter,
      authenticationRouter,
      loggerService,
    );
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
