import ProfileUsecaseApplication from './application/profile-usecase-application';
import QuestionUsecaseApplication from './application/question-usecase-application';
import createQuestionRouter from './infrastructure/controllers/question-controller/express-controller/express-question-router';
import { configureMessageBrokers, configureRepositories } from './setup';

(async () => {
  /* 💽 Repositories. */
  const {
    inMemoryProfileRepository,
    inMemoryQuestionRepository,
  } = configureRepositories();

  /* 📖 Usecases. */
  const profileUsecase = new ProfileUsecaseApplication(inMemoryProfileRepository);
  const questionUsecase = new QuestionUsecaseApplication(
    inMemoryProfileRepository,
    inMemoryQuestionRepository,
  );

  /* 📦 Message brokers. */
  const { rabbitMQProfileConsumer } = configureMessageBrokers(profileUsecase);
  await rabbitMQProfileConsumer.connect();
  await rabbitMQProfileConsumer.consumeMessage('Profile:CreateProfile');

  createQuestionRouter(questionUsecase, 3001);
})();
