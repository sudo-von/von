import AMQPBRoker from '../amqp-broker';
import {
  CreateQuestionBroker,
} from '../../dtos/question-dto/question-broker-dtos';

class AMQPCreateQuestionProducer extends AMQPBRoker<CreateQuestionBroker> {}

export default AMQPCreateQuestionProducer;
