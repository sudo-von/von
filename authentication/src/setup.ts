import dotenv from 'dotenv';
import winston from 'winston';
import WinstonLogger from './infrastructure/loggers/winston-logger';
import LoggerService from './domain/services/logger-service';
import InMemoryRepository from './infrastructure/repositories/in-memory-repository';
import BcryptService from './infrastructure/services/bcrypt-service/bcrypt-service';
import JSONWebTokenService from './infrastructure/services/jsonwebtoken-service/jsonwebtoken-service';
import TokenService from './domain/services/token-service';
import CryptographyService from './domain/services/cryptography-service';
import IUserRepository from './domain/repositories/user-repository';

export const configureEnvironmentVariables = () => {
  dotenv.config({ path: `${__dirname}/../.env` });
  const { SECRET_KEY, PORT } = process.env;
  if (!SECRET_KEY) {
    throw new Error('SECRET_KEY is not defined');
  }
  if (!PORT) {
    throw new Error('PORT is not defined');
  }
  const SERVER_PORT = parseInt(PORT, 10);
  return { SECRET_KEY, SERVER_PORT };
};

export const configureLoggers = () => {
  const winstonLogger: LoggerService = new WinstonLogger(winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => `📸 ${timestamp} - ${level}: ${message}`),
    ),
    transports: [new winston.transports.Console()],
  }));

  return { winstonLogger };
};

export const configureRepositories = () => {
  const inMemoryRepository: IUserRepository = new InMemoryRepository();
  return { inMemoryRepository };
};

export const configureServices = (secret_key: string, logger: LoggerService) => {
  const jsonWebTokenService: TokenService = new JSONWebTokenService(secret_key, logger);
  const bcryptService: CryptographyService = new BcryptService(logger);
  return {
    jsonWebTokenService,
    bcryptService,
  };
};
