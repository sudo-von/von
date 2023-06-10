import dotenv from 'dotenv';
import 'express-async-errors';
import UserUsecaseImpl from './application/auth-usecase-impl';
import InMemoryRepositoryImpl from './infrastructure/repositories/in-memory-impl';
import APIServiceImpl from './infrastructure/services/api-service-impl';
import TokenServiceImpl from './infrastructure/services/token-service-impl';
import CryptographyServiceImpl from './infrastructure/services/cryptography-service-impl';

(() => {
  /* 🔐 Environment variables. */
  dotenv.config({ path: `${__dirname}/../.env` });
  const { SECRET_KEY, PORT } = process.env;
  if (!SECRET_KEY) throw new Error('SECRET_KEY is not defined');
  if (!PORT) throw new Error('PORT is not defined');
  const SERVER_PORT = parseInt(PORT, 10);

  /* 💽 Repositories. */
  const inMemoryRepositoryImpl = new InMemoryRepositoryImpl();

  /* ⚙️ Services. */
  const tokenServiceImpl = new TokenServiceImpl(SECRET_KEY);
  const cryptographyServiceImpl = new CryptographyServiceImpl();

  /* 📖 Usecases. */
  const userUseCaseImpl = new UserUsecaseImpl(
    tokenServiceImpl,
    cryptographyServiceImpl,
    inMemoryRepositoryImpl,
  );

  /* 📡 APIs. */
  const apiServiceImpl = new APIServiceImpl(userUseCaseImpl, SERVER_PORT);
  apiServiceImpl.start();
})();
