import configureServer from './infrastructure/config/configure-server';
import configureBrokers from './infrastructure/config/configure-brokers';
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
    } = configureUsecases(
      userRepository,
    );
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    await configureBrokers(MESSAGE_BROKER_URL, userUsecase, loggerService);
    loggerService.info('📦 Brokers have been configured.');

    /* 🔌 Routers. */
    /* 🚀 Server. */
    configureServer(SERVER_PORT, loggerService);
  } catch (e) {
    console.log(`⛔️ An error occurred while configuring the application: ${(e as Error).message}`);
    process.exit(1);
  }
})();