import LoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateQuestionProducer from '../message-brokers/rabbitmq/producers/rabbitmq-create-question-producer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  loggerService: LoggerService,
) => {
  const createQuestionProducer = new RabbitMQCreateQuestionProducer(
    MESSAGE_BROKER_URL,
    loggerService,
  );

  await createQuestionProducer.connect();

  return { createQuestionProducer };
};

export default configureMessageBrokers;
