import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import LoggerService from '../services/logger-service/logger-service';
import RabbitMQCreateUserConsumer from '../message-brokers/rabbitmq/consumers/rabbitmq-create-user-consumer';
import RabbitMQUpdateUserConsumer from '../message-brokers/rabbitmq/consumers/rabbitmq-update-user-consumer';
import RabbitMQCreateQuestionConsumer from '../message-brokers/rabbitmq/consumers/rabbitmq-create-question-consumer';

const configureMessageBrokers = async (
  MESSAGE_BROKER_URL: string,
  userUsecase: UserUsecase,
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
) => {
  const createUserConsumer = new RabbitMQCreateUserConsumer(
    MESSAGE_BROKER_URL,
    loggerService,
    userUsecase,
  );

  const createQuestionConsumer = new RabbitMQCreateQuestionConsumer(
    MESSAGE_BROKER_URL,
    loggerService,
    questionUsecase,
  );

  const updateUserConsumer = new RabbitMQUpdateUserConsumer(
    MESSAGE_BROKER_URL,
    loggerService,
    userUsecase,
  );

  await createUserConsumer.connect();
  await updateUserConsumer.connect();
  await createQuestionConsumer.connect();

  await createUserConsumer.consumeMessage('User:CreateUser');
  await updateUserConsumer.consumeMessage('User:UpdateUser');
  await createQuestionConsumer.consumeMessage('Question:CreateQuestion');
};

export default configureMessageBrokers;
