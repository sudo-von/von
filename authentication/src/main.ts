import configureAPI from './infrastructure/config/configure-api';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepositories from './infrastructure/config/configure-repositories';
import configureFileServices from './infrastructure/config/configure-file-services';
import configureTokenService from './infrastructure/config/configure-token-service';
import configureLoggerService from './infrastructure/config/configure-logger-service';
import configureSecurityService from './infrastructure/config/configure-security-service';
import configurePasswordManagerService from './infrastructure/config/configure-password-manager-service';
import configureUserRouter from './infrastructure/apis/express-api/controllers/user-controller/user-router';
import configureAvatarRouter from './infrastructure/apis/express-api/controllers/avatar-controller/avatar-router';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables/configure-enviroment-variables';
import configureUserDetailsRouter from './infrastructure/apis/express-api/controllers/user-details-controller/user-details-router';
import configureSocialNetworkRouter from './infrastructure/apis/express-api/controllers/social-network-controller/social-network-router';
import configureAuthenticationRouter from './infrastructure/apis/express-api/controllers/authentication-controller/authentication-router';

const loggerService = configureLoggerService();
loggerService.info('📢 Logger service has been configured.');

(async () => {
  try {
    /* 🔐 Environment variables. */
    const {
      API_ENVIRONMENT_VARIABLES,
      AWS_ENVIRONMENT_VARIABLES,
      TOKEN_ENVIRONMENT_VARIABLES,
      BROKER_ENVIRONMENT_VARIABLES,
      REPOSITORY_ENVIRONMENT_VARIABLES,
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 💽 Repositories. */
    const {
      userRepository,
    } = await configureRepositories(REPOSITORY_ENVIRONMENT_VARIABLES);
    loggerService.info('💽 Repositories have been configured.');

    /* 🔧 Services. */
    const {
      avatarFileService,
      socialNetworksFileService,
    } = configureFileServices(AWS_ENVIRONMENT_VARIABLES);
    loggerService.info('📂 File services have been configured.');

    const tokenService = configureTokenService(TOKEN_ENVIRONMENT_VARIABLES);
    loggerService.info('🔑 Token service has been configured.');

    const securityService = configureSecurityService();
    loggerService.info('🔒 Security service has been configured.');

    const passwordManagerService = configurePasswordManagerService();
    loggerService.info('🕵️‍♂️ Password manager service has been configured.');

    /* 📖 Usecases. */
    const {
      userUsecase,
      avatarUsecase,
      userDetailsUsecase,
      socialNetworkUsecase,
      authenticationUsecase,
    } = configureUsecases(
      avatarFileService,
      userRepository,
      securityService,
      socialNetworksFileService,
      passwordManagerService,
    );
    loggerService.info('📖 Usecases have been configured.');

    /* 📦 Message brokers. */
    const {
      createUserProducer,
      updateUserProducer,
    } = await configureBrokers(BROKER_ENVIRONMENT_VARIABLES, loggerService);
    loggerService.info('📦 Message brokers have been configured.');

    /* 🔌 Routers. */
    const userRouter = configureUserRouter(
      userUsecase,
      tokenService,
      userRepository,
      updateUserProducer,
    );
    loggerService.info('🔌 User router has been configured.');
    const userDetailsRouter = configureUserDetailsRouter(
      tokenService,
      userRepository,
      userDetailsUsecase,
    );
    loggerService.info('🔌 User details router has been configured.');
    const avatarRouter = configureAvatarRouter(
      tokenService,
      avatarUsecase,
      userRepository,
    );
    loggerService.info('🔌 Avatar router has been configured.');
    const socialNetworkRouter = configureSocialNetworkRouter(
      tokenService,
      userRepository,
      socialNetworkUsecase,
    );
    loggerService.info('🔌 Social network router has been configured.');
    const authenticationRouter = configureAuthenticationRouter(
      tokenService,
      authenticationUsecase,
      createUserProducer,
    );
    loggerService.info('🔌 Authentication router has been configured.');

    /* 🚀 Controllers. */
    await configureAPI(
      API_ENVIRONMENT_VARIABLES,
      userRouter,
      avatarRouter,
      userDetailsRouter,
      socialNetworkRouter,
      authenticationRouter,
      loggerService,
    );
  } catch (e) {
    loggerService.error('There was a critical error.', e as Error);
    process.exit(1);
  }
})();
