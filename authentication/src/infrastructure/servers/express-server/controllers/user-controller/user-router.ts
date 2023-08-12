import {
  Router,
} from 'express';
import UserController from './user-controller';
import {
  UpdateUserBroker,
} from '../../../../brokers/entities/user-entity/user-broker-entities';
import AMQPBroker from '../../../../brokers/amqp-broker/amqp-broker';
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

  router.get('/username/:username', userController.getUserByUsername);
  router.patch('/username/:username', authenticationHandler, userController.updateUserByUsername);

  return router;
};

export default configureUserRouter;
