import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express/config';
import configureTokenServices from './infrastructure/services/token-service/config';
import configureCryptographyServices from './infrastructure/services/cryptography-service/config';

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
    } = configureTokenServices(
      SECRET_KEY,
    );
    const {
      cryptographyService,
    } = configureCryptographyServices();

    /* 📖 Usecases. */
    const {
      userUsecase,
      authenticationUsecase,
    } = configureUsecases(
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
      tokenService,
      authenticationUsecase,
      createUserProducer,
      updateUserProducer,
    );
  } catch (e) {
    console.log('🔥:', (e as Error).message);
    process.exit(1);
  }
})();
