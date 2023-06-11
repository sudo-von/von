import winston from 'winston';
import LoggerService, { LogType } from '../../domain/services/logger-service';

class WinstonLoggerImpl extends LoggerService {
  private logger: winston.Logger;

  constructor(logger: winston.Logger) {
    super();
    this.logger = logger;
  }

  log = (logType: LogType, message: string): void => {
    this.logger.log(logType, message);
  };
}

export default WinstonLoggerImpl;
