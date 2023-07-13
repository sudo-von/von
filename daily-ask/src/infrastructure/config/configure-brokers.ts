import LoggerService from '../services/logger-service/logger-service';
import AMQPCreateBroadcastQuestionProducer from '../brokers/amqp-broker/amqp-producers/amqp-create-broadcast-question-producer';

const configureBrokers = async (
  url: string,
  loggerService: LoggerService,
) => {
  const createBroadcastQuestionProducer = new AMQPCreateBroadcastQuestionProducer(
    url,
    loggerService,
  );

  await createBroadcastQuestionProducer.connect();

  return {
    createBroadcastQuestionProducer,
  };
};

export default configureBrokers;
