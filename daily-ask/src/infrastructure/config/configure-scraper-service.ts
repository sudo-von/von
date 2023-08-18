import {
  PuppeteerLaunchOptions,
} from 'puppeteer';
import PuppeteerScraperService from '../services/scraper-service/puppeteer-scraper-service/puppeteer-scraper-service';

const configureScraperService = () => {
  const options: PuppeteerLaunchOptions = {
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
    ],
  };

  const scraperService = new PuppeteerScraperService(
    'https://questionsgenerator.com/ice-breaker.php',
    '.support-sentence',
    options,
  );

  return scraperService;
};

export default configureScraperService;
