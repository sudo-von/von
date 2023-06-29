import UserUsecase from '../../domain/usecases/user-usecase';
import RabbitMQUpdateUserConsumer from './rabbitmq/consumers/rabbitmq-create-user-consumer';
import RabbitMQCreateUserConsumer from './rabbitmq/consumers/rabbitmq-update-user-consumer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  userUsecase: UserUsecase,
) => {
  const createUserConsumer = new RabbitMQCreateUserConsumer(MESSAGE_BROKER_URL, userUsecase);
  const updateUserConsumer = new RabbitMQUpdateUserConsumer(MESSAGE_BROKER_URL, userUsecase);

  await createUserConsumer.connect();
  await updateUserConsumer.connect();

  await createUserConsumer.consumeMessage('User:CreateUser');
  await updateUserConsumer.consumeMessage('User:UpdateUser');

  console.log('📦 Message brokers have been configured.');
};

export default configureMessageBrokers;
