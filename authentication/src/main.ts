import configureAPI from './infrastructure/config/configure-api';
import configureLogger from './infrastructure/config/configure-logger';
import configureBrokers from './infrastructure/config/configure-brokers';
import configureRouters from './infrastructure/config/configure-routers';
import configureUsecases from './infrastructure/config/configure-usecases';
import configureRepository from './infrastructure/config/configure-repository';
import configureFileServices from './infrastructure/config/configure-file-services';
import configureTokenService from './infrastructure/config/configure-token-service';
import configurePasswordService from './infrastructure/config/configure-password-service';
import configureSecurityService from './infrastructure/config/configure-security-service';
import configureEnvironmentVariables from './infrastructure/config/configure-environment-variables/configure-enviroment-variables';

(async () => {
  try {
    /* 📊 Loggers. */
    const loggerService = configureLogger();
    loggerService.info('📊 Logger has been configured.');

    /* 🔐 Environment variables. */
    const {
      API_ENVIRONMENT_VARIABLES,
      AWS_ENVIRONMENT_VARIABLES,
      FILE_ENVIRONMENT_VARIABLES,
      TOKEN_ENVIRONMENT_VARIABLES,
      BROKER_ENVIRONMENT_VARIABLES,
      REPOSITORY_ENVIRONMENT_VARIABLES,
    } = configureEnvironmentVariables();
    loggerService.info('🔐 Environment variables have been configured.');

    /* 💽 Repositories. */
    const repository = await configureRepository(REPOSITORY_ENVIRONMENT_VARIABLES);
    loggerService.info('💽 Repository has been configured.');

    /* 🔧 Services. */
    const fileServices = configureFileServices(AWS_ENVIRONMENT_VARIABLES, FILE_ENVIRONMENT_VARIABLES);
    loggerService.info('📂 File services have been configured.');

    const passwordService = configurePasswordService();
    loggerService.info('🕵️‍♂️ Password service has been configured.');

    const securityService = configureSecurityService();
    loggerService.info('🔒 Security service has been configured.');

    const tokenService = configureTokenService(TOKEN_ENVIRONMENT_VARIABLES);
    loggerService.info('🔑 Token service has been configured.');

    /* 📦 Message brokers. */
    const brokers = await configureBrokers({
      loggerService,
      BROKER_ENVIRONMENT_VARIABLES,
    });
    loggerService.info('📦 Message brokers have been configured.');

    /* 📖 Usecases. */
    const usecases = configureUsecases({
      fileServices,
      passwordService,
      repository,
      securityService,
    });
    loggerService.info('📖 Usecases have been configured.');

    /* 🔌 Routers. */
    const routers = configureRouters({
      brokers,
      repository,
      tokenService,
      usecases,
    });
    loggerService.info('🔌 Routers have been configured.');

    /* 🚀 Controllers. */
    await configureAPI({
      routers,
      loggerService,
      API_ENVIRONMENT_VARIABLES,
    });
  } catch (e) {
    throw new Error(`There was a critical error. ${(e as Error).message}`);
  }
})();
