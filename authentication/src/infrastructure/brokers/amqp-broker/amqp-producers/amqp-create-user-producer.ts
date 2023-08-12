import AMQPBroker from '../amqp-broker';
import {
  CreateUserBroker,
} from '../../entities/user-entity/user-broker-entities';

class AMQPCreateUserProducer extends AMQPBroker<CreateUserBroker> {}

export default AMQPCreateUserProducer;
