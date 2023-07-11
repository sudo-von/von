export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| ScheduledTaskService
| WebScraperServiceErrorCode;

export type PuppeteerServiceErrorCode =
| 'PUPPETEER_SERVICE_BROWSER_IS_CLOSED'
| 'PUPPETEER_SERVICE_PAGE_IS_CLOSED';

export type ScheduledTaskService =
| 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS'
| 'SCHEDULED_TASK_SERVICE_INVALID_PATTERN';

export type WebScraperServiceErrorCode =
| PuppeteerServiceErrorCode
| 'WEB_SCRAPER_SERVICE_ELEMENT_NOT_FOUND'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_CLOSE'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_CONNECT'
| 'WEB_SCRAPER_SERVICE_FAILED_TO_SCRAPE';
