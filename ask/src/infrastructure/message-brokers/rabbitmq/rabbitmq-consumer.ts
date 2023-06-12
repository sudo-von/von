import RabbitMQMessageBroker from './rabbitmq-message-broker';

class RabbitMQConsumer extends RabbitMQMessageBroker {
  onMessage = async <CreateProfileEntity>(data: CreateProfileEntity) => {
    console.log('🚀 ~ file: rabbitmq-consumer.ts:5 ~ RabbitMQConsumer ~ data:', data);
    console.log(data);
  };
}

export default RabbitMQConsumer;
