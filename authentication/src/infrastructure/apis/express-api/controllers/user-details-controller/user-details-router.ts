import {
  Router,
} from 'express';
import UserDetailsController from './user-details-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import UserDetailsUsecase from '../../../../../domain/usecases/user-details-usecase/user-details-usecase';

const configureUserDetailsRouter = (
  tokenService: TokenService,
  userRepository: IUserRepository,
  userDetailsUsecase: UserDetailsUsecase,
) => {
  const userDetailsController = new UserDetailsController(userDetailsUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  router.put('/', authenticationHandler, userDetailsController.replaceUserDetails);

  return router;
};

export default configureUserDetailsRouter;
