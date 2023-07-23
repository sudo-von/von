import {
  BrokerFailedToProcessMessageError,
} from '../../errors/broker-errors';
import AMQPBroker from '../amqp-broker';
import {
  UpdateUserBroker,
} from '../../dtos/user-dto/user-broker-dtos';
import LoggerService from '../../../services/logger-service/logger-service';
import UserUsecase from '../../../../domain/usecases/user-usecase/user-usecase';

class AMQPUpdateUserConsumer extends AMQPBroker<UpdateUserBroker> {
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
    protected readonly userUsecase: UserUsecase,
  ) {
    super(url, loggerService);
  }

  onMessage = async (data: UpdateUserBroker): Promise<void> => {
    try {
      await this.userUsecase.updateUserByUserId(data.user_id, {
        username: data.username,
      });
      this.acknowledge();
    } catch (e) {
      this.loggerService.error(BrokerFailedToProcessMessageError.message, e as Error);
    }
  };
}

export default AMQPUpdateUserConsumer;
