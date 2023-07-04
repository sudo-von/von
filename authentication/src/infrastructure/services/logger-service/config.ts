import PinoLoggerService from './pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const loggerService = new PinoLoggerService();

  loggerService.info('Logger service has been configured.');

  return loggerService;
};

export default configureLoggerService;
