import 'express-async-errors';
import UserUsecaseImpl from './user/application/user-usecase-impl';
import InMemoryRepositoryImpl from './user/infrastructure/repositories/in-memory-impl';
import HashServiceImpl from './user/infrastructure/services/hash-service-impl';
import ExpressAPIServiceImpl from './user/infrastructure/services/express-api-service-impl';

(() => {
  /* 💽 Repositories. */
  const inMemoryRepositoryImpl = new InMemoryRepositoryImpl();

  /* ⚙️ Services. */
  const hashServiceImpl = new HashServiceImpl();

  /* 📖 Usecases. */
  const userUseCaseImpl = new UserUsecaseImpl(hashServiceImpl, inMemoryRepositoryImpl);

  /* 📡 Apps. */
  const applications = [
    new ExpressAPIServiceImpl(userUseCaseImpl),
  ];
  applications.forEach((app) => app.start());
})();
