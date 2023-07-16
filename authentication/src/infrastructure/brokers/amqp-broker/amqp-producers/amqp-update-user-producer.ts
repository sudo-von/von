import AMQPBroker from '../amqp-broker';
import {
  UpdateUserBroker,
} from '../../dtos/user-dto/user-broker-dtos';

class AMQPUpdateUserProducer extends AMQPBroker<UpdateUserBroker> {}

export default AMQPUpdateUserProducer;
