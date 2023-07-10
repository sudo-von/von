import {
  createServiceErrorFactory,
} from '../../errors/service-error-factory';

export const PuppeteerServiceBrowserIsClosedError = createServiceErrorFactory({
  code: 'PUPPETEER_SERVICE_BROWSER_IS_CLOSED',
  message: 'The web scraper service browser has closed unexpectedly.',
});

export const PuppeteerServicePageIsClosedError = createServiceErrorFactory({
  code: 'PUPPETEER_SERVICE_PAGE_IS_CLOSED',
  message: 'The web scraper service page has closed unexpectedly.',
});
