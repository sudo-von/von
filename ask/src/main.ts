import ProfileUsecaseApplication from './application/profile-usecase-application';
import { configureMessageBrokers, configureRepositories } from './setup';

(async () => {
  /* 💽 Repositories. */
  const { inMemoryProfileRepository } = configureRepositories();

  /* 📖 Usecases. */
  const profileUsecase = new ProfileUsecaseApplication(inMemoryProfileRepository);

  /* 📦 Message brokers. */
  const { rabbitMqProfileConsumer } = configureMessageBrokers(profileUsecase);
  await rabbitMqProfileConsumer.connect();
  await rabbitMqProfileConsumer.consumeMessage('Profile:CreateProfile');
})();
