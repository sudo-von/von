import {
  UpdateUserMessageBroker,
} from '../../dtos/user-message-broker-dtos';
import RabbitMQMessageBroker from '../rabbitmq';

class RabbitMQUpdateUserProducer extends RabbitMQMessageBroker<UpdateUserMessageBroker> {}

export default RabbitMQUpdateUserProducer;
