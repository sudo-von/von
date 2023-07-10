import {
  createServiceErrorFactory,
} from '../../errors/service-error-factory';

export const PuppeteerServiceBrowserIsClosedError = createServiceErrorFactory({
  code: 'PUPPETEER_SERVICE_BROWSER_IS_CLOSED',
  message: 'The puppeteer browser is closed.',
});

export const PuppeteerServicePageIsClosedError = createServiceErrorFactory({
  code: 'PUPPETEER_SERVICE_PAGE_IS_CLOSED',
  message: 'The puppeteer page is closed.',
});
