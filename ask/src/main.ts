import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureRepositories from './infrastructure/repositories/setup';
import configureServices from './infrastructure/services/config';

(async () => {
  /* 🔐 Environment variables. */
  const {
    SECRET_KEY,
    SERVER_PORT,
    MESSAGE_BROKER_HOST,
    MESSAGE_BROKER_PORT,
  } = configureEnvironmentVariables();

  /* 💽 Repositories. */
  const {
    profileRepository,
    questionRepository,
  } = configureRepositories();

  /* 🔧 Services. */
  const { tokenService } = configureServices(SECRET_KEY);

  /* 📖 Usecases. */
  const {
    profileUsecase,
    questionUsecase,
  } = configureUsecases(profileRepository, questionRepository);

  /* 📦 Message brokers. */
  const { createProfileConsumer } = configureMessageBrokers(
    MESSAGE_BROKER_HOST,
    MESSAGE_BROKER_PORT,
    profileUsecase,
  );
  await createProfileConsumer.connect();
  await createProfileConsumer.consumeMessage('Profile:CreateProfile');

  /* 🔌 Controllers. */
  const app = configureControllers(tokenService, questionUsecase, profileUsecase);
  app.listen(SERVER_PORT, () => {
    console.log(`🚀 Starting application on port ${SERVER_PORT}.`);
  });
})();
