import { UpdateProfileDto } from '../../dtos/profile-dto';
import RabbitMQMessageBroker from '../rabbitmq-message-broker';

class RabbitMQUpdateProfileProducer extends RabbitMQMessageBroker<UpdateProfileDto> {}

export default RabbitMQUpdateProfileProducer;
