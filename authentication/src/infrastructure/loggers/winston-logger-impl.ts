import winston from 'winston';
import LoggerService from '../../domain/services/logger-service';

class WinstonLoggerImpl extends LoggerService {
  private logger: winston.Logger;

  constructor(logger: winston.Logger) {
    super();
    this.logger = logger;
  }

  log = (level: string, message: string): void => {
    this.logger.log(level, message);
  };
}

export default WinstonLoggerImpl;
