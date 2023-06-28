import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureRepositories from './infrastructure/repositories/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureControllers from './infrastructure/controllers/express/config';
import configureTokenService from './infrastructure/services/token-service/config';
import configureUserRouter from './infrastructure/controllers/express/user-controller/config';
import configureCryptographyService from './infrastructure/services/cryptography-service/config';
import configureAuthenticationRouter from './infrastructure/controllers/express/authentication-controller/config';

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
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );

    /* 🔧 Services. */
    const tokenService = configureTokenService(SECRET_KEY);
    const cryptographyService = configureCryptographyService();

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

    /* 🔌 Routers. */
    const userRouter = configureUserRouter(
      userUsecase,
      tokenService,
      userRepository,
      updateUserProducer,
    );
    const authenticationRouter = configureAuthenticationRouter(
      tokenService,
      authenticationUsecase,
      createUserProducer,
    );

    /* 🚀 Controllers. */
    await configureControllers(
      SERVER_PORT,
      userRouter,
      authenticationRouter,
    );
  } catch (e) {
    console.log(`⛔️ An error occurred while configuring the application: ${(e as Error).message}`);
    process.exit(1);
  }
})();
