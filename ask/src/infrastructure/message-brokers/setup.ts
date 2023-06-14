import ProfileUsecase from '../../domain/usecases/profile-usecase';
import RabbitMQProfileConsumer from './rabbitmq/rabbitmq-profile-consumer';

const AMQP_HOST = 'amqp://localhost:5672';

const configureMessageBrokers = (profileUsecase: ProfileUsecase) => {
  const rabbitMQProfileConsumer = new RabbitMQProfileConsumer(AMQP_HOST, profileUsecase);
  return { rabbitMQProfileConsumer };
};

export default configureMessageBrokers;
