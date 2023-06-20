import RabbitMQMessageBroker from '../rabbitmq-message-broker';
import { RestrictedUserEntity } from '../../../../domain/entities/user-entity';

class RabbitMQCreateProfileProducer extends RabbitMQMessageBroker<RestrictedUserEntity> {}

export default RabbitMQCreateProfileProducer;
