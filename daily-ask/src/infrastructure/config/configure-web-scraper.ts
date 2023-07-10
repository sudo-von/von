import {
  PuppeteerLaunchOptions,
} from 'puppeteer';
import LoggerService from '../services/logger-service/logger-service';
import PuppeteerWebScraperService from '../services/web-scraper-service/puppeteer-web-scraper-service/puppeteer-web-scraper-service';

const configureWebScraperService = (loggerService: LoggerService) => {
  const options: PuppeteerLaunchOptions = {
    headless: 'new',
    executablePath: '/usr/bin/google-chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
    ],
  };

  const conversationStartersWebScrapper = new PuppeteerWebScraperService(
    'https://www.conversationstarters.com/generator.php',
    loggerService,
    options,
  );

  const eslconversationWebScrapperService = new PuppeteerWebScraperService(
    'https://eslconversationtopics.com/random-question-generator/',
    loggerService,
    options,
  );

  const questionsgeneratorWebScrapperService = new PuppeteerWebScraperService(
    'https://questionsgenerator.com/ice-breaker.php',
    loggerService,
    options,
  );

  return {
    conversationStartersWebScrapper,
    eslconversationWebScrapperService,
    questionsgeneratorWebScrapperService,
  };
};

export default configureWebScraperService;
