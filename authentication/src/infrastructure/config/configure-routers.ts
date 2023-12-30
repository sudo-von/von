import {
  Router,
} from 'express';
import {
  Brokers,
} from './configure-brokers';
import {
  Usecases,
} from './configure-usecases';
import TokenService from '../services/token-service/token-service';
import IUserRepository from '../../domain/repositories/user-repository/user-repository';
import configureUserRouter from '../apis/express-api/controllers/user-controller/user-router';
import configureAvatarRouter from '../apis/express-api/controllers/avatar-controller/avatar-router';
import configureUserDetailsRouter from '../apis/express-api/controllers/user-details-controller/user-details-router';
import configureSocialNetworkRouter from '../apis/express-api/controllers/social-network-controller/social-network-router';
import configureAuthenticationRouter from '../apis/express-api/controllers/authentication-controller/authentication-router';

export type ConfigureRouters = {
  brokers: Brokers;
  usecases: Usecases;
  tokenService: TokenService;
  repository: IUserRepository;
};

/* TO-DO: Use a better type instead of Router. Refactor required. */
export type Routers = {
  userRouter: Router;
  avatarRouter: Router;
  userDetailsRouter: Router;
  socialNetworkRouter: Router;
  authenticationRouter: Router;
};

const configureRouters = ({
  brokers,
  usecases,
  tokenService,
  repository,
}: ConfigureRouters): Routers => {
  try {
    const {
      createUserProducer,
      updateUserProducer,
    } = brokers;

    const {
      userUsecase,
      avatarUsecase,
      userDetailsUsecase,
      socialNetworkUsecase,
      authenticationUsecase,
    } = usecases;

    const userRouter = configureUserRouter(
      userUsecase,
      tokenService,
      repository,
      updateUserProducer,
    );

    const avatarRouter = configureAvatarRouter(
      tokenService,
      avatarUsecase,
      repository,
    );

    const userDetailsRouter = configureUserDetailsRouter(
      tokenService,
      repository,
      userDetailsUsecase,
    );

    const socialNetworkRouter = configureSocialNetworkRouter(
      tokenService,
      repository,
      socialNetworkUsecase,
    );

    const authenticationRouter = configureAuthenticationRouter(
      tokenService,
      authenticationUsecase,
      createUserProducer,
    );

    return {
      userRouter,
      avatarRouter,
      userDetailsRouter,
      socialNetworkRouter,
      authenticationRouter,
    };
  } catch (e) {
    throw new Error(`An error occurred while configuring the routers. ${(e as Error).message}`);
  }
};

export default configureRouters;
