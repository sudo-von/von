import {
  Router,
} from 'express';
import AboutController from './about-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import AboutUsecase from '../../../../../domain/usecases/about-usecase/about-usecase';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';

const configureAboutRouter = (
  tokenService: TokenService,
  aboutUsecase: AboutUsecase,
  userRepository: IUserRepository,
) => {
  const aboutController = new AboutController(aboutUsecase);

  const router = Router();

  const authenticationHandler = authenticationMiddleware(
    tokenService,
    userRepository,
  );

  router.get('/username/:username', aboutController.getAboutByUsername);
  router.post('/username/:username', authenticationHandler, aboutController.createAboutByUsername);
  router.patch('/username/:username', authenticationHandler, aboutController.updateAboutByUsername);

  return router;
};

export default configureAboutRouter;
