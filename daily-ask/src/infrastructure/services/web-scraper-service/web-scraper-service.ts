import LoggerService from '../logger-service/logger-service';

abstract class WebScraperService {
  constructor(
    protected readonly url: string,
    protected readonly selector: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract close: () => Promise<void>;

  abstract connect: () => Promise<void>;

  abstract scrape: () => Promise<string>;
}

export default WebScraperService;
