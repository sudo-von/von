import AMQPBRoker from '../amqp-broker';
import {
  CreateBroadcastQuestionBroker,
} from '../../dtos/question-dto/question-broker-dtos';

class AMQPCreateBroadcastQuestionProducer extends AMQPBRoker<CreateBroadcastQuestionBroker> {}

export default AMQPCreateBroadcastQuestionProducer;
