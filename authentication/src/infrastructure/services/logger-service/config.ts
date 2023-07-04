import PinoLoggerService from './pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const loggerService = new PinoLoggerService();

  return loggerService;
};

export default configureLoggerService;
