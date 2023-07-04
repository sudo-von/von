import {
  CreateUserMessageBroker,
} from '../../dtos/user-message-broker-dtos';
import RabbitMQMessageBroker from '../rabbitmq';

class RabbitMQCreateUserProducer extends RabbitMQMessageBroker<CreateUserMessageBroker> {}

export default RabbitMQCreateUserProducer;
