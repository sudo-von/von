import pino, {
  Logger,
  LoggerOptions,
} from 'pino';
import ILogger from '../logger';

class PinoLogger implements ILogger {
  private readonly logger: Logger;

  constructor(options: LoggerOptions) {
    this.logger = pino(options);
  }

  info = (message: string) => this.logger.info(message);
}

export default PinoLogger;
