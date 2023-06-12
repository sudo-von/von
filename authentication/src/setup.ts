import dotenv from 'dotenv';
import winston from 'winston';
import LoggerService from './domain/services/logger-service';
import InMemoryRepository from './infrastructure/repositories/user-repositories/in-memory-repository';
import IUserRepository from './domain/repositories/user-repository';
import TokenService from './domain/services/token-service';
import CryptographyService from './domain/services/cryptography-service';
import BcryptService from './infrastructure/services/cryptography-services/bcrypt-service/bcrypt-service';
import WinstonLogger from './infrastructure/services/logger-services/winston-logger/winston-logger';
import JSONWebTokenService from './infrastructure/services/token-services/jsonwebtoken-service/jsonwebtoken-service';
import RabbitMQMessageBroker from './infrastructure/message-brokers/rabbitmq/rabbitmq-message-broker';
import MessageBroker from './infrastructure/message-brokers/message-broker';

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

export const configureServices = (secret_key: string) => {
  const jsonWebTokenService: TokenService = new JSONWebTokenService(secret_key);
  const bcryptService: CryptographyService = new BcryptService();
  return {
    jsonWebTokenService,
    bcryptService,
  };
};

export const configureMessageBrokers = (logger: LoggerService) => {
  const rabbitMQMessageBroker = new RabbitMQMessageBroker(logger, 'amqp://localhost:5672');
  return { rabbitMQMessageBroker };
};

export const connectBrokers = async (brokers: Record<string, MessageBroker>): Promise<void> => {
  await Promise.all(Object.values(brokers).map(async (broker) => {
    await broker.connect();
  }));
};
