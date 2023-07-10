import LoggerService from '../logger-service/logger-service';

abstract class WebScraperService {
  constructor(protected readonly loggerService: LoggerService) {}

  abstract close: () => Promise<void>;

  abstract connect: () => Promise<void>;

  abstract scrape: (url: string, identifier: string) => Promise<string>;
}

export default WebScraperService;
