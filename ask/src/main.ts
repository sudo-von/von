import RabbitMQConsumer from './infrastructure/message-brokers/rabbitmq/rabbitmq-consumer';

(async () => {
  /* 📦 Message brokers. */
  const rabbitMQMessageBroker = new RabbitMQConsumer('amqp://localhost:5672');
  await rabbitMQMessageBroker.connect();
  await rabbitMQMessageBroker.consumeMessage('Profile:CreateProfile');
})();
