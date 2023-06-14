import ProfileUsecase from './domain/usecases/profile-usecase';
import RabbitMQProfileConsumer from './infrastructure/message-brokers/rabbitmq/rabbitmq-profile-consumer';
import InMemoryProfileRepository from './infrastructure/repositories/profile-repository/in-memory-profile-repository';
import InMemoryQuestionRepository from './infrastructure/repositories/question-repository/in-memory-question-repository';

export const configureRepositories = () => {
  const inMemoryProfileRepository = new InMemoryProfileRepository();
  const inMemoryQuestionRepository = new InMemoryQuestionRepository();
  return { inMemoryProfileRepository, inMemoryQuestionRepository };
};

export const configureMessageBrokers = (profileUsecase: ProfileUsecase) => {
  const rabbitMQProfileConsumer = new RabbitMQProfileConsumer('amqp://localhost:5672', profileUsecase);
  return { rabbitMQProfileConsumer };
};
