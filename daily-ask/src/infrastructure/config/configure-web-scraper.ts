import LoggerService from '../services/logger-service/logger-service';
import PuppeteerWebScraperService from '../services/web-scraper-service/puppeteer-web-scraper-service/puppeteer-web-scraper-service';

const configureWebScraperService = (loggerService: LoggerService) => {
  const webScraperService = new PuppeteerWebScraperService({
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
    ],
  }, loggerService);

  return webScraperService;
};

export default configureWebScraperService;
