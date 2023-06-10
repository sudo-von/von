import dotenv from 'dotenv';
import 'express-async-errors';
import UserUsecaseImpl from './application/user-usecase-impl';
import InMemoryRepositoryImpl from './infrastructure/repositories/in-memory-impl';
import HashServiceImpl from './infrastructure/services/hash-service-impl';
import ExpressAPIServiceImpl from './infrastructure/services/express-api-service-impl';
import AuthServiceImpl from './infrastructure/services/auth-service-impl';

(() => {
  /* 🔐 Environment variables. */
  dotenv.config({ path: `${__dirname}/../.env` });
  const { SECRET_KEY } = process.env;
  if (!SECRET_KEY) throw new Error('SECRET_KEY is not defined');

  /* 💽 Repositories. */
  const inMemoryRepositoryImpl = new InMemoryRepositoryImpl();

  /* ⚙️ Services. */
  const authService = new AuthServiceImpl(SECRET_KEY);
  const hashServiceImpl = new HashServiceImpl();

  /* 📖 Usecases. */
  const userUseCaseImpl = new UserUsecaseImpl(authService, hashServiceImpl, inMemoryRepositoryImpl);

  /* 📡 Apps. */
  const applications = [
    new ExpressAPIServiceImpl(userUseCaseImpl),
  ];
  applications.forEach((app) => app.start());
})();
