import { MediumUserEntity } from '../../../../domain/entities/user-entity';
import RabbitMQMessageBroker from '../rabbitmq-message-broker';

class RabbitMQCreateProfileProducer extends RabbitMQMessageBroker<MediumUserEntity> {}

export default RabbitMQCreateProfileProducer;
