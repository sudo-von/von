import AMQPBroker from '../amqp-broker';
import {
  CreateUserBroker,
} from '../../dtos/user-dto/user-broker-dtos';

class AMQPCreateUserProducer extends AMQPBroker<CreateUserBroker> {}

export default AMQPCreateUserProducer;
