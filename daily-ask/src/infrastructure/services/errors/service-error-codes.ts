export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| WebScraperServiceErrorCode;

export type PuppeteerServiceErrorCode =
| 'PUPPETEER_SERVICE_BROWSER_IS_CLOSED'
| 'PUPPETEER_SERVICE_PAGE_IS_CLOSED';

export type WebScraperServiceErrorCode =
| PuppeteerServiceErrorCode
| 'WEB_SCRAPER_SERVICE_ELEMENT_NOT_FOUND'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_CLOSE'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_CONNECT'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_SCRAPPE';
