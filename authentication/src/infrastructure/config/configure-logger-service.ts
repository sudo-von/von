import {
  stdTimeFunctions,
} from 'pino';
import PinoLoggerService from '../services/logger-service/pino-logger-service/pino-logger-service';

const configureLoggerService = () => {
  const loggerService = new PinoLoggerService({
    level: 'info',
    formatters: {
      level: (label) => ({ level: label }),
    },
    timestamp: stdTimeFunctions.isoTime,
  });

  return loggerService;
};

export default configureLoggerService;
