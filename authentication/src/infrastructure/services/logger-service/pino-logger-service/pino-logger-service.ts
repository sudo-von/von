import pino, {
  Logger,
} from 'pino';
import LoggerService from '../logger-service';

class PinoLoggerService extends LoggerService {
  private logger: Logger = pino({ level: 'info' });

  info = (message: string) => this.logger.info(`🚀: ${message}`);

  warn = (message: string) => this.logger.warn(`🚧: ${message}`);

  error = (message: string, error: Error) => this.logger.error(error, `⛔️: ${message}`);
}

export default PinoLoggerService;
