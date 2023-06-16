import configureUsecases from './application/setup';
import configureEnvironmentVariables from './infrastructure/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';
import configureMessageBrokers from './infrastructure/message-brokers/setup';
import configureRepositories from './infrastructure/repositories/setup';
import configureServices from './infrastructure/services/config';

(async () => {
  /* 🔐 Environment variables. */
  const { SECRET_KEY, SERVER_PORT } = configureEnvironmentVariables();

  /* 💽 Repositories. */
  const { profileRepository, questionRepository } = configureRepositories();

  /* 🔧 Services. */
  const { tokenService } = configureServices(SECRET_KEY);

  /* 📖 Usecases. */
  const {
    profileUsecase,
    questionUsecase,
  } = configureUsecases(profileRepository, questionRepository);

  /* 📦 Message brokers. */
  const { createProfileConsumer } = configureMessageBrokers(profileUsecase);
  await createProfileConsumer.connect();
  await createProfileConsumer.consumeMessage('Profile:CreateProfile');

  /* 🔌 Controllers. */
  const app = configureControllers(tokenService, questionUsecase);
  app.listen(SERVER_PORT, () => {
    console.log(`🚀 Starting application on port ${SERVER_PORT}.`);
  });
})();
