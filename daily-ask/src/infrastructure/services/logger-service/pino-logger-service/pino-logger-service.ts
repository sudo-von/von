import pino, {
  Logger,
  LoggerOptions,
} from 'pino';
import LoggerService from '../logger-service';

class PinoLoggerService extends LoggerService {
  private readonly logger: Logger;

  constructor(options: LoggerOptions) {
    super();
    this.logger = pino(options);
  }

  info = (message: string) => this.logger.info(message);

  error = (message: string, error: Error) => this.logger.error(`⛔️ ${message} ${error.message}`);
}

export default PinoLoggerService;
