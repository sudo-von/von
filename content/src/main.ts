import configureServer from './infrastructure/config/configure-server';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';
import configureVideoRouter from './infrastructure/servers/express-server/controllers/video-controller/video-router';
import configureSecurityService from './infrastructure/config/configure-security-service';
import configureFileService from './infrastructure/config/configure-file-service';
import configureVectorRouter from './infrastructure/servers/express-server/controllers/vector-controller/vector-router';
import configureContentRouter from './infrastructure/servers/express-server/controllers/content-controller/content-router';

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
      vectorRepository,
      contentRepository,
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
    const securityService = configureSecurityService();
    loggerService.info('🔒 Security service has been configured.');
    const fileService = configureFileService();
    loggerService.info('📂 File service has been configured.');

    /* 📖 Usecases. */
    const {
      userUsecase,
      videoUsecase,
      vectorUsecase,
      contentUsecase,
    } = configureUsecases(
      fileService,
      userRepository,
      securityService,
      videoRepository,
      vectorRepository,
      contentRepository,
    );
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    await configureBrokers(MESSAGE_BROKER_URL, userUsecase, loggerService);
    loggerService.info('📦 Brokers have been configured.');

    /* 🔌 Routers. */
    const videoRouter = configureVideoRouter(tokenService, videoUsecase, userRepository);
    loggerService.info('🔌 Video router has been configured.');
    const vectorRouter = configureVectorRouter(tokenService, vectorUsecase, userRepository);
    loggerService.info('🔌 Vector router has been configured.');
    const contentRouter = configureContentRouter(tokenService, contentUsecase, userRepository);
    loggerService.info('🔌 Content router has been configured.');

    /* 🚀 Server. */
    configureServer(SERVER_PORT, contentRouter, videoRouter, vectorRouter, loggerService);
  } catch (e) {
    loggerService.error('There was an application error.', e as Error);
    process.exit(1);
  }
})();
