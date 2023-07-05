import pino, {
  Logger,
  LoggerOptions,
} from 'pino';
import LoggerService from '../logger-service';

class PinoLoggerService extends LoggerService {
  private logger: Logger;

  constructor(options: LoggerOptions) {
    super();
    this.logger = pino(options);
  }

  info = (message: string) => this.logger.info(message);

  warn = (message: string) => this.logger.warn(message);

  error = (message: string, error: Error) => {
    const formattedMessage = `⛔️ ${message} ${error.message};`;
    this.logger.error(formattedMessage);
  };
}

export default PinoLoggerService;
