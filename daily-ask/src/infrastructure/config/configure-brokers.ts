import LoggerService from '../services/logger-service/logger-service';
import AMQPCreateDailyQuestionProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-daily-question-producer';

const configureBrokers = async (
  url: string,
  loggerService: LoggerService,
) => {
  const createBroadcastQuestionProducer = new AMQPCreateDailyQuestionProducer(
    url,
    loggerService,
  );

  await createBroadcastQuestionProducer.connect();

  return {
    createBroadcastQuestionProducer,
  };
};

export default configureBrokers;
