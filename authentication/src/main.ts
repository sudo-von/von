import 'express-async-errors';
import winston from 'winston';
import AuthUsecaseImpl from './application/auth-usecase-impl';
import InMemoryRepositoryImpl from './infrastructure/repositories/in-memory-impl';
import APIServiceImpl from './infrastructure/services/api-service-impl';
import TokenServiceImpl from './infrastructure/services/token-service-impl';
import CryptographyServiceImpl from './infrastructure/services/cryptography-service-impl';
import WinstonLoggerImpl from './infrastructure/loggers/winston-logger-impl';
import configureEnvironmentVariables from './setup';

(() => {
  /* 🔐 Environment variables. */
  const { SECRET_KEY, SERVER_PORT } = configureEnvironmentVariables();

  /* 📝 Loggers. */
  const winstonLoggerImpl = new WinstonLoggerImpl(winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => `📸 ${timestamp} - ${level}: ${message}`),
    ),
    transports: [new winston.transports.Console()],
  }));

  /* 💽 Repositories. */
  const inMemoryRepositoryImpl = new InMemoryRepositoryImpl();

  /* ⚙️ Services. */
  const tokenServiceImpl = new TokenServiceImpl(SECRET_KEY, winstonLoggerImpl);
  const cryptographyServiceImpl = new CryptographyServiceImpl(winstonLoggerImpl);

  /* 📖 Usecases. */
  const authUsecaseImpl = new AuthUsecaseImpl(
    tokenServiceImpl,
    winstonLoggerImpl,
    cryptographyServiceImpl,
    inMemoryRepositoryImpl,
  );

  /* 📡 APIs. */
  const apiServiceImpl = new APIServiceImpl(
    authUsecaseImpl,
    winstonLoggerImpl,
    SERVER_PORT,
  );
  apiServiceImpl.start();
})();
