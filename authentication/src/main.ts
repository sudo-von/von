import express from 'express';
import 'express-async-errors';
import UserUsecaseImpl from './user/application/user-usecase-impl';
import InMemoryRepositoryImpl from './user/infrastructure/repositories/in-memory-impl';
import HashServiceImpl from './user/infrastructure/services/hash-service-impl';
import createUserRouter from './user/infrastructure/routers/user-router';
import apiConfig from './user/infrastructure/config/api-config';

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
  app.listen(apiConfig.port, () => {
    console.log(`[APP] - Starting application on port ${apiConfig.port}`);
  });
})();
