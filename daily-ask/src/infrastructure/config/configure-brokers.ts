import LoggerService from '../services/logger-service/logger-service';
import AMQPCreateDailyQuestionProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-daily-question-producer';

const configureBrokers = async (url: string, loggerService: LoggerService) => {
  const createDailyQuestionProducer = new AMQPCreateDailyQuestionProducer(url, loggerService);

  await createDailyQuestionProducer.connect();

  return {
    createDailyQuestionProducer,
  };
};

export default configureBrokers;
