import {
  stdTimeFunctions,
} from 'pino';
import PinoLoggerService from '../services/logger-service/pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const loggerService = new PinoLoggerService({
    level: 'info',
    name: 'authentication',
    timestamp: stdTimeFunctions.isoTime,
    formatters: {
      level: (label) => ({ level: label }),
    },
  });

  return loggerService;
};

export default configureLoggerService;
