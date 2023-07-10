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

  const conversationStartersWebScrapperService = new PuppeteerWebScraperService(
    'https://www.conversationstarters.com/generator.php',
    '#random',
    loggerService,
    options,
  );

  const eslconversationWebScrapperService = new PuppeteerWebScraperService(
    'https://eslconversationtopics.com/random-question-generator/',
    '.the-question',
    loggerService,
    options,
  );

  const questionsgeneratorWebScrapperService = new PuppeteerWebScraperService(
    'https://questionsgenerator.com/ice-breaker.php',
    '.support-sentence',
    loggerService,
    options,
  );

  return {
    conversationStartersWebScrapperService,
    eslconversationWebScrapperService,
    questionsgeneratorWebScrapperService,
  };
};

export default configureWebScraperServices;
