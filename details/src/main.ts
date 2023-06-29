import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express/config';
import configureTokenService from './infrastructure/services/token-service/config';

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

    /* 💽 Repositories. */
    const {
      userRepository,
      profileRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );

    /* ⚙️ Services. */
    const tokenService = configureTokenService(SECRET_KEY);

    /* 📖 Usecases. */
    const {
      userUsecase,
      profileUsecase,
    } = configureUsecases(
      userRepository,
      profileRepository,
    );

    /* 📦 Message brokers. */
    await configureMessageBrokers(
      MESSAGE_BROKER_URL,
      userUsecase,
    );

    /* 🔌 Controllers. */
    configureControllers(tokenService, profileUsecase, SERVER_PORT);
  } catch (e) {
    console.log(`⛔️ An error occurred while configuring the application: ${(e as Error).message}`);
    process.exit(1);
  }
})();
