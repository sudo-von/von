import UserUsecase from '../../domain/usecases/user-usecase';
import RabbitMQUpdateUserConsumer from './rabbitmq/consumers/rabbitmq-create-user-consumer';
import RabbitMQCreateUserConsumer from './rabbitmq/consumers/rabbitmq-update-user-consumer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  userUsecase: UserUsecase,
) => {
  const createUserProducer = new RabbitMQCreateUserConsumer(MESSAGE_BROKER_URL, userUsecase);
  const updateUserProducer = new RabbitMQUpdateUserConsumer(MESSAGE_BROKER_URL, userUsecase);

  await createUserProducer.connect();
  await updateUserProducer.connect();

  await createUserProducer.consumeMessage('User:CreateUser');
  await updateUserProducer.consumeMessage('User:UpdateUser');
};

export default configureMessageBrokers;
