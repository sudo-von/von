import ProfileUsecaseApplication from './application/profile-usecase-application';
import { configureMessageBrokers, configureRepositories } from './setup';

(async () => {
  /* 💽 Repositories. */
  const { inMemoryProfileRepository } = configureRepositories();

  /* 📖 Usecases. */
  const profileUsecase = new ProfileUsecaseApplication(inMemoryProfileRepository);

  /* 📦 Message brokers. */
  const { rabbitMQProfileConsumer } = configureMessageBrokers(profileUsecase);
  await rabbitMQProfileConsumer.connect();
  await rabbitMQProfileConsumer.consumeMessage('Profile:CreateProfile');
})();
