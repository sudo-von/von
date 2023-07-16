import {
  Router,
} from 'express';
import UserController from './user-controller';
import {
  UpdateUserBroker,
} from '../../../../brokers/dtos/user-dto/user-broker-dtos';
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

  router.get('/username/:username', userController.getUserByUsername);
  router.patch('/username/:username', authenticationMiddleware(tokenService, userRepository), userController.updateUserByUsername);

  return router;
};

export default configureUserRouter;
