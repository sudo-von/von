import LoggerService from '../services/logger-service/logger-service';
import AMQPCreateQuestionProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-question-producer';

const configureBrokers = async (
  url: string,
  loggerService: LoggerService,
) => {
  const createQuestionProducer = new AMQPCreateQuestionProducer(url, loggerService);

  await createQuestionProducer.connect();

  return {
    createQuestionProducer,
  };
};

export default configureBrokers;
