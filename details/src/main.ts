import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureRepositories from './infrastructure/repositories/config';

(async () => {
  try {
  /* 🔐 Environment variables. */
    const {
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

    /* 📖 Usecases. */
    const { userUsecase } = configureUsecases(userRepository);

    /* 📦 Message brokers. */
    await configureMessageBrokers(MESSAGE_BROKER_URL, userUsecase);

    /* 🔌 Controllers. */
  } catch (e) {
    console.log('🔥 Error:', (e as Error).message);
  }
})();
