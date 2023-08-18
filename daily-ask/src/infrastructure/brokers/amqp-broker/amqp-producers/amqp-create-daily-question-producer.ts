import AMQPBroker from '../amqp-broker';
import {
  CreateDailyQuestionBroker,
} from '../../entities/daily-question-entity/daily-question-broker-entities';

class AMQPCreateDailyQuestionProducer extends AMQPBroker<CreateDailyQuestionBroker> {}

export default AMQPCreateDailyQuestionProducer;
