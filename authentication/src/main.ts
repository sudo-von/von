import express from 'express';
import UserUsecaseImpl from './user/application/user-repository';
import InMemoryRepositoryImpl from './user/infrastructure/repositories/in-memory-impl';
import HashServiceImpl from './user/infrastructure/services/hash-service-impl';
import createUserRouter from './user/infrastructure/routers/user-router';

(() => {
  /* 💽 Repositories. */
  const inMemoryRepositoryImpl = new InMemoryRepositoryImpl();

  /* ⚙️ Services. */
  const hashServiceImpl = new HashServiceImpl();

  /* 📖 Usecases. */
  const userUseCaseImpl = new UserUsecaseImpl(hashServiceImpl, inMemoryRepositoryImpl);

  /* 📡 Routers. */
  const userRouter = createUserRouter(userUseCaseImpl);

  /* 📡 Middlewares. */
  const app = express();
  app.use(express.json());
  app.use('/user', userRouter);
  app.listen(3002, () => {
    console.log(`[APP] - Starting application on port ${3002}`);
  });
})();
