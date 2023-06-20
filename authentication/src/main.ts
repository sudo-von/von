import 'express-async-errors';
import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureServices from './infrastructure/services/configure';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';

(async () => {
  /* 🔐 Environment variables. */
  const {
    SECRET_KEY,
    SERVER_PORT,
    MESSAGE_BROKER_URL,
  } = configureEnvironmentVariables();

  /* 💽 Repositories. */
  const {
    userRepository,
  } = configureRepositories();

  /* ⚙️ Services. */
  const {
    tokenService,
    loggerService,
    cryptographyService,
  } = configureServices(SECRET_KEY);

  /* 📖 Usecases. */
  const {
    authenticationUsecase,
  } = configureUsecases(tokenService, loggerService, userRepository, cryptographyService);

  /* 📦 Message brokers. */
  const {
    createProfileProducer,
  } = configureMessageBrokers(MESSAGE_BROKER_URL);

  /* 🔌 Controllers. */
  configureControllers(
    SERVER_PORT,
    loggerService,
    authenticationUsecase,
    createProfileProducer,
  );
})();
