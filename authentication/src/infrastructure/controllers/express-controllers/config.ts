import express from 'express';
import errorHandler from './middlewares/error-handler';
import exceptionHandler from './middlewares/exception-handler';
import ILoggerService from '../../../domain/services/logger-service';
import createAuthenticationRouter from './authentication-controller/authentication-router';
import AuthenticationUsecase from '../../../domain/usecases/authentication-usecase';
import validateRequestBodyHandler from './middlewares/validate-request-body-handler';
import RabbitMQCreateProfileProducer from '../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-create-profile-producer';
import createUserRouter from './user-controller/user-router';
import UserUsecase from '../../../domain/usecases/user-usecase';
import RabbitMQUpdateProfileProducer from '../../message-brokers/rabbitmq-message-broker/producers/rabbitmq-update-profile-producer';

const configureControllers = (
  SERVER_PORT: number,
  userUsecase: UserUsecase,
  loggerService: ILoggerService,
  authenticationUsecase: AuthenticationUsecase,
  createProfileProducer: RabbitMQCreateProfileProducer,
  updateProfileProducer: RabbitMQUpdateProfileProducer,
) => {
  const app = express();
  app.use(express.json());

  const authenticationRouter = createAuthenticationRouter(
    authenticationUsecase,
    createProfileProducer,
  );

  const userRouter = createUserRouter(userUsecase, updateProfileProducer);

  app.use('/v1/auth', authenticationRouter);
  app.use('/v1/user', userRouter);
  app.use(validateRequestBodyHandler);
  app.use(exceptionHandler(loggerService));
  app.use(errorHandler);

  app.listen(SERVER_PORT, () => {
    loggerService.log('info', `💻: Starting application on port ${SERVER_PORT}.`);
  });
};

export default configureControllers;
