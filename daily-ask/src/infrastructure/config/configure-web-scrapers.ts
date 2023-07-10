import {
  PuppeteerLaunchOptions,
} from 'puppeteer';
import LoggerService from '../services/logger-service/logger-service';
import PuppeteerWebScraperService from '../services/web-scraper-service/puppeteer-web-scraper-service/puppeteer-web-scraper-service';

const configureWebScraperServices = (loggerService: LoggerService) => {
  const options: PuppeteerLaunchOptions = {
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
    ],
  };

  const generatorWebScrapperService = new PuppeteerWebScraperService(
    'https://questionsgenerator.com/ice-breaker.php',
    '.support-sentence',
    loggerService,
    options,
  );

  const startersWebScraperService = new PuppeteerWebScraperService(
    'https://www.conversationstarters.com/generator.php',
    '#random',
    loggerService,
    options,
  );

  const topicsWebScraperService = new PuppeteerWebScraperService(
    'https://eslconversationtopics.com/random-question-generator/',
    '.the-question',
    loggerService,
    options,
  );

  return {
    generatorWebScrapperService,
    startersWebScraperService,
    topicsWebScraperService,
  };
};

export default configureWebScraperServices;
