import pino, {
  Logger,
} from 'pino';
import ILoggerService from '../logger-service';

class PinoLoggerService implements ILoggerService {
  private logger: Logger;

  constructor() {
    this.logger = pino({ level: 'info' });
  }

  info = (message: string) => this.logger.info(`🚀 ${message}`);

  warn = (message: string) => this.logger.warn(`🚧 ${message}`);

  error = (error: Error, message: string) => this.logger.error(error, `⛔️ ${message}`);
}

export default PinoLoggerService;
