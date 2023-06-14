import configureUsecases from './application/setup';
import createQuestionRouter from './infrastructure/controllers/question-controller/express-controller/express-question-router';
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
    profileUsecase,
    questionUsecase,
  } = configureUsecases(inMemoryProfileRepository, inMemoryQuestionRepository);

  /* 📦 Message brokers. */
  const { rabbitMQProfileConsumer } = configureMessageBrokers(profileUsecase);
  await rabbitMQProfileConsumer.connect();
  await rabbitMQProfileConsumer.consumeMessage('Profile:CreateProfile');

  createQuestionRouter(questionUsecase, 3001);
})();
