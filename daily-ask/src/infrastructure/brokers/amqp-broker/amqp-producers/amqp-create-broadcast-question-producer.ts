import AMQPBroker from '../amqp-broker';
import {
  CreateBroadcastQuestionBroker,
} from '../../dtos/question-dto/question-broker-dtos';

class AMQPCreateBroadcastQuestionProducer extends AMQPBroker<CreateBroadcastQuestionBroker> {}

export default AMQPCreateBroadcastQuestionProducer;
