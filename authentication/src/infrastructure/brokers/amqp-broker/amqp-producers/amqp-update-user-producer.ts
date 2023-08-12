import AMQPBroker from '../amqp-broker';
import {
  UpdateUserBroker,
} from '../../entities/user-entity/user-broker-entities';

class AMQPUpdateUserProducer extends AMQPBroker<UpdateUserBroker> {}

export default AMQPUpdateUserProducer;
