import PinoLoggerService from './pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const loggerService = new PinoLoggerService();

  console.log('🔧 Logger service has been configured.');

  return loggerService;
};

export default configureLoggerService;
