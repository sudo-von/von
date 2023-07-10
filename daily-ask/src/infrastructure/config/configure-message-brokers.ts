import LoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateQuestionProducer from '../message-brokers/rabbitmq/producers/rabbitmq-create-question-producer';

const configureMessageBrokers = async (
  messageBrokerUrl: string,
  loggerService: LoggerService,
) => {
  const createQuestionProducer = new RabbitMQCreateQuestionProducer(
    messageBrokerUrl,
    loggerService,
  );

  await createQuestionProducer.connect();

  return { createQuestionProducer };
};

export default configureMessageBrokers;
