import AMQPBRoker from '../amqp-broker';
import {
  CreateUserBroker,
} from '../../dtos/user-dto/user-broker-dtos';

class AMQPCreateUserProducer extends AMQPBRoker<CreateUserBroker> {}

export default AMQPCreateUserProducer;
