import AMQPBRoker from '../amqp-broker';
import {
  UpdateUserBroker,
} from '../../dtos/user-dto/user-broker-dtos';

class AMQPUpdateUserProducer extends AMQPBRoker<UpdateUserBroker> {}

export default AMQPUpdateUserProducer;
