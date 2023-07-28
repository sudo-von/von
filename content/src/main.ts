import configureServer from './infrastructure/config/configure-server';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureVideoRouter from './infrastructure/servers/express-server/controllers/video-controller/video-router';

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
      videoRepository,
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
      videoUsecase,
    } = configureUsecases(
      userRepository,
      videoRepository,
    );
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    await configureBrokers(MESSAGE_BROKER_URL, userUsecase, loggerService);
    loggerService.info('📦 Brokers have been configured.');

    /* 🔌 Routers. */
    const aboutRouter = configureVideoRouter(tokenService, videoUsecase, userRepository);
    loggerService.info('🔌 About router has been configured.');

    /* 🚀 Server. */
    configureServer(SERVER_PORT, aboutRouter, loggerService);
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
