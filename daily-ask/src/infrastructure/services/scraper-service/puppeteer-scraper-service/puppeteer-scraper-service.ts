import {
  Page,
  launch,
  Browser,
  PuppeteerLaunchOptions,
} from 'puppeteer';
import statusCodes from 'http-status-codes';
import {
  ScraperServiceEmptyContentError,
  ScraperServiceFailedToCloseError,
  ScraperServiceFailedToScrapeError,
  ScraperServiceFailedToConnectError,
  ScraperServiceUnreachablePageError,
  ScraperServiceSelectorNotFoundError,
  ScraperServiceMissingConnectionError,
  ScraperServiceUnexpectedStatusCodeError,
} from '../scraper-errors';
import ScraperService from '../scraper-service';

class PuppeteerScraperService extends ScraperService {
  private browser?: Browser;

  private page?: Page;

  constructor(
    protected readonly url: string,
    protected readonly selector: string,
    protected readonly options: PuppeteerLaunchOptions,
  ) {
    super(url, selector);
  }

  close = async (): Promise<void> => {
    try {
      if (this.page) {
        await this.page.close();
        this.page = undefined;
      }

      if (this.browser) {
        await this.browser.close();
        this.browser = undefined;
      }
    } catch (e) {
      throw ScraperServiceFailedToCloseError((e as Error).message);
    }
  };

  connect = async (): Promise<void> => {
    try {
      if (!this.browser) {
        this.browser = await launch(this.options);
      }

      if (!this.page) {
        this.page = await this.browser.newPage();
      }
    } catch (e) {
      throw ScraperServiceFailedToConnectError((e as Error).message);
    }
  };

  scrape = async (): Promise<string> => {
    try {
      if (!this.browser || !this.page) {
        throw ScraperServiceMissingConnectionError(this.url);
      }

      const response = await this.page.goto(this.url, { waitUntil: 'domcontentloaded' });
      if (!response) {
        throw ScraperServiceUnreachablePageError(this.url);
      }

      const statusCode = response.status();
      if (statusCode !== statusCodes.OK) {
        throw ScraperServiceUnexpectedStatusCodeError(this.url, statusCode);
      }

      const selector = await this.page.waitForSelector(this.selector, { visible: true });
      if (!selector) {
        throw ScraperServiceSelectorNotFoundError(this.url, this.selector);
      }

      const content = await this.page.evaluate((node) => node.textContent.trim(), selector);
      if (!content) {
        throw ScraperServiceEmptyContentError(this.url, this.selector);
      }

      return content;
    } catch (e) {
      throw ScraperServiceFailedToScrapeError((e as Error).message);
    }
  };
}

export default PuppeteerScraperService;
