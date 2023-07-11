import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const WebScraperServiceElementNotFoundError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_ELEMENT_NOT_FOUND',
  message: 'The requested element could not be found.',
});

export const WebScraperServiceFailedToCloseError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_CLOSE',
  message: 'Failed to close the connection.',
});

export const WebScraperServiceFailedToConnectError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_CONNECT',
  message: 'Failed to establish a connection.',
});

export const WebScraperServiceFailedToScrappeError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_SCRAPE',
  message: 'Failed to scrape. Data extraction was unsuccessful.',
});
