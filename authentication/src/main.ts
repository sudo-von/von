import 'express-async-errors';
import AuthUsecaseImpl from './application/auth-usecase-impl';

import {
  configureLoggers,
  configureServices,
  configureRepositories,
  configureEnvironmentVariables,
  configureMessageBrokers,
  connectBrokers,
} from './setup';
import createAuthRouter from './infrastructure/controllers/auth-controller/express-controllers/express-auth-router';

(async () => {
  /* 🔐 Environment variables. */
  const { SECRET_KEY, SERVER_PORT } = configureEnvironmentVariables();

  /* 📝 Loggers. */
  const { winstonLogger } = configureLoggers();

  /* 💽 Repositories. */
  const { inMemoryRepository } = configureRepositories();

  /* ⚙️ Services. */
  const { jsonWebTokenService, bcryptService } = configureServices(SECRET_KEY);

  /* 📖 Usecases. */
  const authUsecaseImpl = new AuthUsecaseImpl(
    jsonWebTokenService,
    winstonLogger,
    bcryptService,
    inMemoryRepository,
  );

  /* 📦 Message brokers. */
  const { rabbitMQMessageBroker } = configureMessageBrokers(winstonLogger);
  await connectBrokers({ rabbitMQMessageBroker });

  /* 📡 Routers. */
  createAuthRouter(
    authUsecaseImpl,
    winstonLogger,
    rabbitMQMessageBroker,
    SERVER_PORT,
  );
})();
