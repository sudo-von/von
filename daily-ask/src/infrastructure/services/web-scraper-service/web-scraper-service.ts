import LoggerService from '../logger-service/logger-service';

abstract class WebScraperService {
  /**
  * Creates an instance of WebScraperService.
  * @param {string} url - The URL to scrape.
  * @param {string} selector - The selector for the desired content.
  * @param {LoggerService} loggerService - The logger service for logging.
  */
  constructor(
    protected readonly url: string,
    protected readonly selector: string,
    protected readonly loggerService: LoggerService,
  ) {}

  /**
  * Closes the web scraper service.
  * @returns {Promise<void>} A promise that resolves when the service is closed.
  */
  abstract close: ()
  => Promise<void>;

  /**
  * Connects to the web scraper service.
  * @returns {Promise<void>} A promise that resolves when the service is connected.
  */
  abstract connect: ()
  => Promise<void>;

  /**
  * Scrapes the desired content from the web page.
  * @abstract
  * @returns {Promise<string>} A promise that resolves with the scraped content.
  */
  abstract scrape: ()
  => Promise<string>;
}

export default WebScraperService;
