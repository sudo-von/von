import AMQPBroker from '../amqp-broker';
import {
  CreateDailyQuestionBroker,
} from '../../entities/question-entity/question-broker-entities';

class AMQPCreateDailyQuestionProducer extends AMQPBroker<CreateDailyQuestionBroker> {}

export default AMQPCreateDailyQuestionProducer;
