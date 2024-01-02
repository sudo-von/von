import {
  LoggerOptions,
  stdTimeFunctions,
} from 'pino';
import ILogger from '../loggers/logger';
import PinoLogger from '../loggers/pino-logger-service/pino-logger-service';

const configureLogger = (): ILogger => {
  try {
    const { isoTime } = stdTimeFunctions;

    const options: LoggerOptions = {
      base: undefined,
      name: 'authentication',
      timestamp: isoTime,
      formatters: {
        level: (label) => ({ level: label }),
      },
    };

    const loggerService = new PinoLogger(options);

    return loggerService;
  } catch (e) {
    throw new Error(`An error occurred while configuring the logger. ${(e as Error).message}`);
  }
};

export default configureLogger;
