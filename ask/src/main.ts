import configureUsecases from './application/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureServices from './infrastructure/services/config';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables';

const loggerService = configureLoggerService();
loggerService.info('📢 Logger service has been configured.');

(async () => {
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
    profileRepository,
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
    profileUsecase,
    questionUsecase,
  } = configureUsecases(profileRepository, questionRepository);
  loggerService.info('📖 Usecases have been configured.');

  /* 📦 Message brokers. */
  configureMessageBrokers(MESSAGE_BROKER_URL, profileUsecase);
  loggerService.info('📦 Message brokers have been configured.');

  /* 🔌 Controllers. */
  configureControllers(tokenService, questionUsecase, profileUsecase, SERVER_PORT);
})();
