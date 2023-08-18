import statusCodes from 'http-status-codes';
import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const ScraperServiceEmptyContentError = (
  url: string,
  selector: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_EMPTY_CONTENT',
  message: `The '${selector}' selector was found on the page '${url}', but the content was empty.`,
});

export const ScraperServiceFailedToCloseError = (
  details: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_FAILED_TO_CLOSE',
  message: `Failed to close the connection: '${details}'.`,
});

export const ScraperServiceFailedToConnectError = (
  details: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_FAILED_TO_CONNECT',
  message: `Failed to establish a connection: '${details}'.`,
});

export const ScraperServiceFailedToScrapeError = (
  details: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_FAILED_TO_SCRAPE',
  message: `Failed to perform web scraping: '${details}'.`,
});

export const ScraperServiceMissingConnectionError = (
  url: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_MISSING_CONNECTION',
  message: `Attempted to scrape the page '${url}' without establishing a connection first.`,
});

export const ScraperServiceSelectorNotFoundError = (
  url: string,
  selector: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_SELECTOR_NOT_FOUND',
  message: `The '${selector}' selector was not found on the page '${url}'.`,
});

export const ScraperServiceUnexpectedStatusCodeError = (
  url: string,
  statusCode: number,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_UNEXPECTED_STATUS_CODE',
  message: `The page '${url}' returned a status code '${statusCode}' instead of the expected '${statusCodes.OK}'.`,
});

export const ScraperServiceUnreachablePageError = (
  url: string,
) => createServiceErrorFactory({
  code: 'SCRAPER_SERVICE_UNREACHABLE_PAGE',
  message: `The requested page '${url}' is unreachable.`,
});
