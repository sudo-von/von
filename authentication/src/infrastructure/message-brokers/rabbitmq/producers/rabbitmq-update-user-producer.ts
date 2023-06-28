import RabbitMQMessageBroker from '../rabbitmq';
import { MessageBrokerUpdateUserDto } from '../../dtos/message-broker-user-dto';

class RabbitMQUpdateUserProducer extends RabbitMQMessageBroker<MessageBrokerUpdateUserDto> {}

export default RabbitMQUpdateUserProducer;
