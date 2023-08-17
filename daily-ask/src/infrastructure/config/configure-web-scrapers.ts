import {
  PuppeteerLaunchOptions,
} from 'puppeteer';
import LoggerService from '../services/logger-service/logger-service';
import PuppeteerScraperService from '../services/scraper-service/puppeteer-scraper-service/puppeteer-scraper-service';

const configureWebScraperServices = (loggerService: LoggerService) => {
  const options: PuppeteerLaunchOptions = {
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
    ],
  };

  const generatorWebScraperService = new PuppeteerScraperService(
    'https://questionsgenerator.com/ice-breaker.php',
    '.support-sentence',
    loggerService,
    options,
  );

  const startersWebScraperService = new PuppeteerScraperService(
    'https://www.conversationstarters.com/generator.php',
    '#random',
    loggerService,
    options,
  );

  const topicsWebScraperService = new PuppeteerScraperService(
    'https://eslconversationtopics.com/random-question-generator/',
    '.the-question',
    loggerService,
    options,
  );

  return {
    generatorWebScraperService,
    startersWebScraperService,
    topicsWebScraperService,
  };
};

export default configureWebScraperServices;
