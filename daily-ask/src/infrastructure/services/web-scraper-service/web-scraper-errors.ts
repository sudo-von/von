import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const WebScraperServiceElementNotFoundError = (
  details: string,
) => createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_ELEMENT_NOT_FOUND',
  message: `The requested element could not be found: ${details}.`,
});

export const WebScraperServiceFailedToCloseError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_CLOSE',
  message: 'Failed to close the connection.',
});

export const WebScraperServiceFailedToConnectError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_CONNECT',
  message: 'Failed to establish a connection with the question generator service.',
});

export const WebScraperServiceFailedToScrappeError = createServiceErrorFactory({
  code: 'WEB_SCRAPER_SERVICE_FAILED_TO_SCRAPPE',
  message: 'Failed to perform web scraping in WebScraperService. Data extraction was unsuccessful.',
});
