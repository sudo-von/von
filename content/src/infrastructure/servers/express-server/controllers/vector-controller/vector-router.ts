import {
  Router,
} from 'express';
import multer from 'multer';
import VectorController from './vector-controller';
import TokenService from '../../../../services/token-service/token-service';
import authenticationMiddleware from '../../middlewares/authentication-middleware';
import IUserRepository from '../../../../../domain/repositories/user-repository/user-repository';
import VectorUsecase from '../../../../../domain/usecases/vector-usecase/vector-usecase';

const configureVectorRouter = (
  tokenService: TokenService,
  vectorUsecase: VectorUsecase,
  userRepository: IUserRepository,
) => {
  const vectorController = new VectorController(vectorUsecase);

  const router = Router();

  const uploadHandler = multer();

  const authenticationHandler = authenticationMiddleware(tokenService, userRepository);

  const handlers = [uploadHandler.array('vectors'), authenticationHandler];

  router.post('/username/:username', handlers, vectorController.createVectorByUsername);

  return router;
};

export default configureVectorRouter;
