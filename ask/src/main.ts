import configureUsecases from './application/config';
import configureEnvironmentVariables from './infrastructure/config';
import configureControllers from './infrastructure/controllers/express-controllers/config';
import configureMessageBrokers from './infrastructure/message-brokers/config';
import configureRepositories from './infrastructure/repositories/config';
import configureServices from './infrastructure/services/config';

(async () => {
  /* 🔐 Environment variables. */
  const {
    SECRET_KEY,
    SERVER_PORT,
    MESSAGE_BROKER_URL,
  } = configureEnvironmentVariables();

  /* 💽 Repositories. */
  const {
    profileRepository,
    questionRepository,
  } = configureRepositories();

  /* 🔧 Services. */
  const {
    tokenService,
  } = configureServices(SECRET_KEY);

  /* 📖 Usecases. */
  const {
    profileUsecase,
    questionUsecase,
  } = configureUsecases(profileRepository, questionRepository);

  /* 📦 Message brokers. */
  configureMessageBrokers(MESSAGE_BROKER_URL, profileUsecase);

  /* 🔌 Controllers. */
  configureControllers(tokenService, questionUsecase, profileUsecase, SERVER_PORT);
})();
