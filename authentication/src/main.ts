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
      SECRET_KEY,
      SERVER_PORT,
      DATABASE_URL,
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      DATABASE_NAME,
      DATABASE_PASSWORD,
      DATABASE_USERNAME,
      MESSAGE_BROKER_URL,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 💽 Repositories. */
    const {
      userRepository,
    } = await configureRepositories(
      DATABASE_URL,
      DATABASE_NAME,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
    );
    loggerService.info('💽 Repositories have been configured.');

    /* 🔧 Services. */
    const {
      avatarFileService,
      socialNetworksFileService,
    } = configureFileServices(
      AWS_S3_BUCKET,
      AWS_S3_REGION,
      AWS_S3_ACCESS_KEY_ID,
      AWS_S3_SECRET_ACCESS_KEY,
    );
    loggerService.info('📂 File services have been configured.');
    const tokenService = configureTokenService(SECRET_KEY);
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
    } = await configureBrokers(MESSAGE_BROKER_URL, loggerService);
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
      SERVER_PORT,
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
