import {
  Page,
  launch,
  Browser,
  PuppeteerLaunchOptions,
} from 'puppeteer';
import {
  WebScraperServiceFailedToCloseError,
  WebScraperServiceElementNotFoundError,
  WebScraperServiceFailedToConnectError,
  WebScraperServiceFailedToScrappeError,
} from '../web-scraper-errors';
import {
  PuppeteerServicePageIsClosedError,
  PuppeteerServiceBrowserIsClosedError,
} from './puppeteer-web-scraper-service-errors';
import WebScraperService from '../web-scraper-service';
import LoggerService from '../../logger-service/logger-service';

class PuppeteerWebScraperService extends WebScraperService {
  private browser?: Browser;

  private page?: Page;

  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
    private readonly options: PuppeteerLaunchOptions,
  ) {
    super(url, loggerService);
  }

  close = async (): Promise<void> => {
    try {
      if (this.page) await this.page.close();
      if (this.browser) await this.browser.close();
      this.browser = undefined;
      this.page = undefined;
    } catch (e) {
      this.loggerService.error(WebScraperServiceFailedToCloseError.message, e as Error);
      throw WebScraperServiceFailedToCloseError;
    }
  };

  connect = async (): Promise<void> => {
    try {
      if (!this.browser) this.browser = await launch(this.options);
      if (!this.page) this.page = await this.browser.newPage();
    } catch (e) {
      this.loggerService.error(WebScraperServiceFailedToConnectError.message, e as Error);
      throw WebScraperServiceFailedToConnectError;
    }
  };

  scrape = async (identifier: string): Promise<string> => {
    try {
      if (!this.browser) throw PuppeteerServiceBrowserIsClosedError;
      if (!this.page) throw PuppeteerServicePageIsClosedError;

      await this.page.goto(this.url);

      const element = await this.page.$(identifier);
      if (!element) throw WebScraperServiceElementNotFoundError(identifier);

      const result = await this.page.evaluate((node) => node.textContent.trim(), element);

      await element.dispose();

      return result;
    } catch (e) {
      this.loggerService.error(WebScraperServiceFailedToScrappeError.message, e as Error);
      throw WebScraperServiceFailedToScrappeError;
    }
  };
}

export default PuppeteerWebScraperService;
