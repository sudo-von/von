import LoggerService from '../services/logger-service/logger-service';
import UserUsecase from '../../domain/usecases/user-usecase/user-usecase';
import QuestionUsecase from '../../domain/usecases/question-usecase/question-usecase';
import AMQPCreateUserConsumer from '../brokers/amqp-broker/amqp-consumers/amqp-create-user-consumer';
import AMQPUpdateUserConsumer from '../brokers/amqp-broker/amqp-consumers/amqp-update-user-consumer';
import AMQPCreateDailyQuestionConsumer from '../brokers/amqp-broker/amqp-consumers/amqp-create-daily-question-consumer';

const configureBrokers = async (
  url: string,
  userUsecase: UserUsecase,
  loggerService: LoggerService,
  questionUsecase: QuestionUsecase,
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

  const createQuestionConsumer = new AMQPCreateDailyQuestionConsumer(
    url,
    loggerService,
    questionUsecase,
  );

  await createUserConsumer.connect();
  await updateUserConsumer.connect();
  await createQuestionConsumer.connect();

  await createUserConsumer.consume('Authentication:CreateUser');
  await updateUserConsumer.consume('Authentication:UpdateUser');
  await createQuestionConsumer.consume('DailyAsk:CreateDailyQuestion');
};

export default configureBrokers;
