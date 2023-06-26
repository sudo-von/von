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
      DATABASE_URL,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      MESSAGE_BROKER_URL,
    } = configureEnvironmentVariables();

    /* 💽 Repositories. */
    const {
      userRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );

    /* ⚙️ Services. */
    const {
      tokenService,
      loggerService,
      cryptographyService,
    } = configureServices(
      SECRET_KEY,
    );

    /* 📖 Usecases. */
    const {
      userUsecase,
      authenticationUsecase,
    } = configureUsecases(
      tokenService,
      userRepository,
      cryptographyService,
    );

    /* 📦 Message brokers. */
    const {
      createUserProducer,
      updateUserProducer,
    } = await configureMessageBrokers(
      MESSAGE_BROKER_URL,
    );

    /* 🔌 Controllers. */
    configureControllers(
      SERVER_PORT,
      userUsecase,
      loggerService,
      authenticationUsecase,
      createUserProducer,
      updateUserProducer,
    );
  } catch (e) {
    console.log('🔥:', (e as Error).message);
    process.exit(1);
  }
})();
