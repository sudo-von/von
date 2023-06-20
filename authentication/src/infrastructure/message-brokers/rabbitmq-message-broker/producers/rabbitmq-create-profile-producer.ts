import { CreateProfileDto } from '../../dtos/profile-dto';
import RabbitMQMessageBroker from '../rabbitmq-message-broker';

class RabbitMQCreateProfileProducer extends RabbitMQMessageBroker<CreateProfileDto> {}

export default RabbitMQCreateProfileProducer;
