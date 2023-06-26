import RabbitMQMessageBroker from '../rabbitmq';
import { MessageBrokerCreateUserDto } from '../../dtos/message-broker-user-dto';

class RabbitMQCreateUserProducer extends RabbitMQMessageBroker<MessageBrokerCreateUserDto> {}

export default RabbitMQCreateUserProducer;
