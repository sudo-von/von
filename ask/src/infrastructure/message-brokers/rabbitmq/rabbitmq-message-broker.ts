import amqp, { Channel, Connection } from 'amqplib';
import MessageBroker, { Queues } from '../message-broker';
import {
  MessageBrokerChannelIsClosedError,
  MessageBrokerFailedToCloseError,
  MessageBrokerFailedToConnectError,
  MessageBrokerFailedToConsumeMessageError,
  MessageBrokerFailedToSendMessageError,
  MessageBrokerNoMessageAvailableError,
} from '../errors/message-broker-error-factories';

abstract class RabbitMQMessageBroker extends MessageBroker {
  protected connection?: Connection;

  protected channel?: Channel;

  produceMessage = async <T>(queue: Queues, data: T): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      const message = JSON.stringify(data);
      const buffer = Buffer.from(message);
      await this.channel.assertQueue(queue);
      this.channel.sendToQueue(queue, buffer);
    } catch (e) {
      throw MessageBrokerFailedToSendMessageError;
    }
  };

  consumeMessage = async <T>(queue: Queues): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      await this.channel.assertQueue(queue);
      this.channel.consume(queue, (message) => {
        if (!message) throw MessageBrokerNoMessageAvailableError;
        const data = JSON.parse(message.content.toString()) as T;
        this.onMessage(data);
        if (!this.channel) throw MessageBrokerChannelIsClosedError;
        this.channel.ack(message);
      });
    } catch (e) {
      throw MessageBrokerFailedToConsumeMessageError;
    }
  };

  connect = async (): Promise<void> => {
    try {
      this.connection = await amqp.connect(this.BROKER_URL);
      this.channel = await this.connection.createChannel();
    } catch (e) {
      throw MessageBrokerFailedToConnectError;
    }
  };

  close = async () => {
    try {
      if (this.channel) await this.channel.close();
      if (this.connection) await this.connection.close();
      this.channel = undefined;
      this.connection = undefined;
    } catch (e) {
      throw MessageBrokerFailedToCloseError;
    }
  };
}

export default RabbitMQMessageBroker;
