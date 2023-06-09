import {
  LoggerOptions,
  stdTimeFunctions,
} from 'pino';
import PinoLoggerService from '../services/logger-service/pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const options: LoggerOptions = {
    base: undefined,
    name: 'ask',
    timestamp: stdTimeFunctions.isoTime,
    formatters: {
      level: (label) => ({ level: label }),
    },
  };

  const loggerService = new PinoLoggerService(options);

  return loggerService;
};

export default configureLoggerService;
