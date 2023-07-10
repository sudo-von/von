import cron from 'node-cron';
import RabbitMQ from '../message-brokers/rabbitmq/rabbitmq';
import WebScraperService from '../services/web-scraper-service/web-scraper-service';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';

const configureCronJobs = (
  questionUsecase: QuestionUsecase,
  createQuestionProducer: RabbitMQ,
  conversationStartersWebScrapper: WebScraperService,
  eslconversationWebScrapperService: WebScraperService,
  questionsgeneratorWebScrapperService: WebScraperService,
) => {
  cron.schedule('* * * * * *', async () => {
    await conversationStartersWebScrapper.connect();

    const scrappedQuestion = await conversationStartersWebScrapper.scrape('#random');

    const question = questionUsecase.createQuestion({
      askedBy: 'conversationstarters',
      question: scrappedQuestion,
    });

    await conversationStartersWebScrapper.close();

    const buffer = Buffer.from(JSON.stringify(question));

    createQuestionProducer.produceMessage('Question:CreateQuestion', buffer);
  });

  cron.schedule('*/5 * * * * *', async () => {
    await eslconversationWebScrapperService.connect();

    const scrappedQuestion = await eslconversationWebScrapperService.scrape('.the-question');

    const question = questionUsecase.createQuestion({
      askedBy: 'eslconversation',
      question: scrappedQuestion,
    });

    await conversationStartersWebScrapper.close();

    const buffer = Buffer.from(JSON.stringify(question));

    createQuestionProducer.produceMessage('Question:CreateQuestion', buffer);
  });

  cron.schedule('*/5 * * * * *', async () => {
    await questionsgeneratorWebScrapperService.connect();

    const scrappedQuestion = await questionsgeneratorWebScrapperService.scrape('.support-sentence');

    const question = questionUsecase.createQuestion({
      askedBy: 'questionsgenerator',
      question: scrappedQuestion,
    });

    await conversationStartersWebScrapper.close();

    const buffer = Buffer.from(JSON.stringify(question));

    createQuestionProducer.produceMessage('Question:CreateQuestion', buffer);
  });
};

export default configureCronJobs;
