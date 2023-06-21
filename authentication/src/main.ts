import 'express-async-errors';
import configureUsecases from './application/config';
import configureServices from './infrastructure/services/configure';
import configureEnvironmentVariables from './infrastructure/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';

(async () => {
  try {
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
      userUsecase,
      authenticationUsecase,
    } = configureUsecases(tokenService, userRepository, cryptographyService);

    /* 📦 Message brokers. */
    const {
      createProfileProducer,
      updateProfileProducer,
    } = configureMessageBrokers(MESSAGE_BROKER_URL);

    /* 🔌 Controllers. */
    configureControllers(
      SERVER_PORT,
      userUsecase,
      loggerService,
      authenticationUsecase,
      createProfileProducer,
      updateProfileProducer,
    );
  } catch (e) {
    console.log('🔥 Message:', (e as Error).message);
  }
})();
