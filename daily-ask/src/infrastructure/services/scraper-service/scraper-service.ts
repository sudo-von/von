/**
 * Abstract class representing a scraper service.
 * @abstract
 */
abstract class ScraperService {
  /**
   * Creates an instance of ScraperService.
   * @constructor
   * @param {string} url - The url to scrape.
   * @param {string} selector - The selector for the desired content.
   */
  constructor(
    protected readonly url: string,
    protected readonly selector: string,
  ) {}

  /**
   * Closes the scraper service.
   * @returns {Promise<void>} A promise that resolves when the service is closed.
   */
  abstract close: ()
  => Promise<void>;

  /**
   * Connects to the scraper service.
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

export default ScraperService;
