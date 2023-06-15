import configureUsecases from './application/setup';
import configureEnvironmentVariables from './infrastructure/config';
import configureControllers from './infrastructure/controllers/express-controllers/setup';
import configureMessageBrokers from './infrastructure/message-brokers/setup';
import configureRepositories from './infrastructure/repositories/setup';
import JSONWebTokenService from './infrastructure/services/token-service/jsonwebtoken-service/jsonwebtoken-service';

(async () => {
  /* 🔐 Environment variables. */
  const { SECRET_KEY } = configureEnvironmentVariables();

  /* 💽 Repositories. */
  const {
    inMemoryProfileRepository,
    inMemoryQuestionRepository,
  } = configureRepositories();

  const tokenService = new JSONWebTokenService(SECRET_KEY);

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

  configureControllers(tokenService, questionUsecase, answerUsecase);
})();
