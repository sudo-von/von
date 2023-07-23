import LoggerService from '../services/logger-service/logger-service';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import AMQPCreateUserConsumer from '../brokers/amqp-broker/amqp-consumers/amqp-create-user-consumer';
import AMQPUpdateUserConsumer from '../brokers/amqp-broker/amqp-consumers/amqp-update-user-consumer';

const configureBrokers = async (
  url: string,
  userUsecase: UserUsecase,
  loggerService: LoggerService,
) => {
  const createUserConsumer = new AMQPCreateUserConsumer(
    url,
    loggerService,
    userUsecase,
  );

  const updateUserConsumer = new AMQPUpdateUserConsumer(
    url,
    loggerService,
    userUsecase,
  );

  await createUserConsumer.connect();
  await updateUserConsumer.connect();

  await createUserConsumer.consume('User:CreateUser');
  await updateUserConsumer.consume('User:UpdateUser');
};

export default configureBrokers;
