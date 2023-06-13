import ProfileUsecase from './domain/usecases/profile-usecase';
import RabbitMQProfileConsumer from './infrastructure/message-brokers/rabbitmq/rabbitmq-profile-consumer';
import InMemoryProfileRepository from './infrastructure/repositories/user-repositories/in-memory-repository';

export const configureRepositories = () => {
  const inMemoryProfileRepository = new InMemoryProfileRepository();
  return { inMemoryProfileRepository };
};

export const configureMessageBrokers = (profileUsecase: ProfileUsecase) => {
  const rabbitMqProfileConsumer = new RabbitMQProfileConsumer('amqp://localhost:5672', profileUsecase);
  return { rabbitMqProfileConsumer };
};
