import {
  BrokerFailedToProcessMessageError,
} from '../../errors/broker-errors';
import AMQPBroker from '../amqp-broker';
import {
  CreateUserBroker,
} from '../../entities/user-entity/user-broker-entities';
import LoggerService from '../../../services/logger-service/logger-service';
import UserUsecase from '../../../../domain/usecases/user-usecase/user-usecase';

class AMQPCreateUserConsumer extends AMQPBroker<CreateUserBroker> {
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(url, loggerService);
  }

  onMessage = async (data: CreateUserBroker): Promise<void> => {
    try {
      await this.userUsecase.createUser({
        userId: data.user_id,
        username: data.username,
      });
      this.acknowledge();
    } catch (e) {
      this.loggerService.error(BrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default AMQPCreateUserConsumer;
