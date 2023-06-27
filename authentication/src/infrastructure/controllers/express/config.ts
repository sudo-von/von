import 'express-async-errors';
import express from 'express';
import bodyMiddleware from './middlewares/body-middleware';
import createUserRouter from './user-controller/user-router';
import errorMiddleware from './middlewares/error-middleware';
import UserUsecase from '../../../domain/usecases/user-usecase';
import TokenService from '../../services/token-service/token-service';
import IUserRepository from '../../../domain/repositories/user-repository';
import AuthenticationUsecase from '../../../domain/usecases/authentication-usecase';
import createAuthenticationRouter from './authentication-controller/authentication-router';
import RabbitMQCreateProfileProducer from '../../message-brokers/rabbitmq/producers/rabbitmq-create-user-producer';
import RabbitMQUpdateProfileProducer from '../../message-brokers/rabbitmq/producers/rabbitmq-update-user-producer';

const configureControllers = (
  SERVER_PORT: number,
  userUsecase: UserUsecase,
  tokenService: TokenService,
  userRepository: IUserRepository,
  authenticationUsecase: AuthenticationUsecase,
  createProfileProducer: RabbitMQCreateProfileProducer,
  updateProfileProducer: RabbitMQUpdateProfileProducer,
) => {
  const app = express();
  app.use(express.json());

  const userRouter = createUserRouter(
    userUsecase,
    tokenService,
    userRepository,
    updateProfileProducer,
  );

  const authenticationRouter = createAuthenticationRouter(
    tokenService,
    authenticationUsecase,
    createProfileProducer,
  );

  app.use('/api/v1/user', userRouter);
  app.use('/api/v1/authentication', authenticationRouter);

  app.use(bodyMiddleware);
  app.use(errorMiddleware);

  app.listen(SERVER_PORT, () => {
    console.log(`🚀: Starting application on port ${SERVER_PORT}.`);
  });
};

export default configureControllers;
