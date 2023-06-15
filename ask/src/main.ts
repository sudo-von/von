import configureUsecases from './application/setup';
import configureControllers from './infrastructure/controllers/express-controllers/setup';
import configureMessageBrokers from './infrastructure/message-brokers/setup';
import configureRepositories from './infrastructure/repositories/setup';

(async () => {
  /* 💽 Repositories. */
  const {
    inMemoryProfileRepository,
    inMemoryQuestionRepository,
  } = configureRepositories();

  /* 📖 Usecases. */
  const {
    answerUsecase,
    profileUsecase,
    questionUsecase,
  } = configureUsecases(inMemoryProfileRepository, inMemoryQuestionRepository);

  /* 📦 Message brokers. */
  const { rabbitMQProfileConsumer } = configureMessageBrokers(profileUsecase);
  await rabbitMQProfileConsumer.connect();
  await rabbitMQProfileConsumer.consumeMessage('Profile:CreateProfile');

  configureControllers(questionUsecase, answerUsecase);
})();
