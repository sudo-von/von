import RabbitMQMessageBroker from '../rabbitmq';
import { MessageBrokerUpdateUserDto } from '../../dtos/message-broker-user-dto';

class RabbitMQUpdateProfileProducer extends RabbitMQMessageBroker<MessageBrokerUpdateUserDto> {}

export default RabbitMQUpdateProfileProducer;
