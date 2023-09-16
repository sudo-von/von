import {
  Router,
} from 'express';
import UserController from './user-controller';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
import {
  UpdateUserBroker,
} from '../../../../brokers/entities/user-entity/user-broker-entities';
import TokenService from '../../../../services/token-service/token-service';
import UserUsecase from '../../../../../domain/usecases/user-usecase/user-usecase';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureUserRouter = (
  userUsecase: UserUsecase,
  tokenService: TokenService,
  userRepository: IUserRepository,
  updateUserProducer: AMQPBroker<UpdateUserBroker>,
) => {
  const userController = new UserController(userUsecase, updateUserProducer);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  router.get('/', userController.getUser);
  router.patch('/', authenticationHandler, userController.updateUser);

  return router;
};

export default configureUserRouter;
