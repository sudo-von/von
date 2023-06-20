import winston from 'winston';
import ILoggerService, { LogType } from '../../../../domain/services/logger-service';

class WinstonLoggerService implements ILoggerService {
  private logger: winston.Logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => `📸: ${timestamp} - ${level}: ${message}`),
    ),
    transports: [new winston.transports.Console()],
  });

  log = (logType: LogType, message: string): void => {
    this.logger.log(logType, message);
  };
}

export default WinstonLoggerService;
