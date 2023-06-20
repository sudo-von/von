import express from 'express';
import errorHandler from './middlewares/error-handler';
import exceptionHandler from './middlewares/exception-handler';
import ILoggerService from '../../../domain/services/logger-service';
import createAuthenticationRouter from './auth-controller/auth-router';
import AuthenticationUsecase from '../../../domain/usecases/authentication-usecase';
import validateRequestBodyHandler from './middlewares/validate-request-body-handler';
import RabbitMQCreateProfileProducer from '../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';

const configureControllers = (
  SERVER_PORT: number,
  loggerService: ILoggerService,
  authenticationUsecase: AuthenticationUsecase,
  createProfileProducer: RabbitMQCreateProfileProducer,
) => {
  const app = express();
  app.use(express.json());

  const authenticationRouter = createAuthenticationRouter(
    authenticationUsecase,
    createProfileProducer,
  );

  app.use('/v1/auth', authenticationRouter);
  app.use(validateRequestBodyHandler);
  app.use(exceptionHandler);
  app.use(errorHandler);

  app.listen(SERVER_PORT, () => {
    loggerService.log('info', `💻: [APIServiceImpl][start]: Starting application on port ${SERVER_PORT}.`);
  });
};

export default configureControllers;
