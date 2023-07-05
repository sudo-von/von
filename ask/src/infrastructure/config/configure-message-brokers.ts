import UserUsecase from '../../domain/usecases/user-usecase';
import LoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateUserConsumer from '../message-brokers/rabbitmq/consumers/rabbitmq-create-user-consumer';
import RabbitMQUpdateUserConsumer from '../message-brokers/rabbitmq/consumers/rabbitmq-update-user-consumer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  userUsecase: UserUsecase,
  loggerService: LoggerService,
) => {
  const createUserProducer = new RabbitMQCreateUserConsumer(
    MESSAGE_BROKER_URL,
    loggerService,
    userUsecase,
  );

  const updateUserProducer = new RabbitMQUpdateUserConsumer(
    MESSAGE_BROKER_URL,
    loggerService,
    userUsecase,
  );

  await createUserProducer.connect();
  await updateUserProducer.connect();

  await createUserProducer.consumeMessage('User:CreateUser');
  await updateUserProducer.consumeMessage('User:UpdateUser');
};

export default configureMessageBrokers;
