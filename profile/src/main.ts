import RabbitMQMessageBroker from './infrastructure/message-brokers/rabbitmq/rabbitmq-message-broker';

(async () => {
  /* 📦 Message brokers. */
  const rabbitMQMessageBroker = new RabbitMQMessageBroker('amqp://localhost:5672');
  rabbitMQMessageBroker.connect();
})();
