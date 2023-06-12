import 'express-async-errors';
import AuthUsecaseImpl from './application/auth-usecase-impl';
import createAuthController from './infrastructure/services/api-service-impl';
import {
  configureLoggers,
  configureServices,
  configureRepositories,
  configureEnvironmentVariables,
} from './setup';

(() => {
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

  /* 📡 APIs. */
  createAuthController(
    jsonWebTokenService,
    winstonLogger,
    authUsecaseImpl,
    SERVER_PORT,
  );
})();
