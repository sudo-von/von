import amqp, { Channel, Connection } from 'amqplib';
import {
  MessageBrokerFailedToCloseError,
  MessageBrokerChannelIsClosedError,
  MessageBrokerFailedToConnectError,
  MessageBrokerNoMessageAvailableError,
  MessageBrokerFailedToSendMessageError,
  MessageBrokerFailedToConsumeMessageError,
} from '../errors/message-broker-errors';
import MessageBroker, { Queues } from '../message-broker';

abstract class RabbitMQ<T> extends MessageBroker<T> {
  protected connection?: Connection;

  protected channel?: Channel;

  protected message?: amqp.ConsumeMessage;

  ackMessage = (): void => {
    if (!this.channel) throw MessageBrokerChannelIsClosedError;
    if (!this.message) throw MessageBrokerNoMessageAvailableError;
    this.channel.ack(this.message);
    this.message = undefined;
  };

  close = async () => {
    try {
      if (this.channel) await this.channel.close();
      if (this.connection) await this.connection.close();
      this.channel = undefined;
      this.connection = undefined;
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw MessageBrokerFailedToCloseError;
    }
  };

  connect = async (): Promise<void> => {
    try {
      if (!this.connection) this.connection = await amqp.connect(this.MESSAGE_BROKER_URL);
      if (!this.channel) this.channel = await this.connection.createChannel();
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw MessageBrokerFailedToConnectError;
    }
  };

  consumeMessage = async (queue: Queues): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      await this.channel.assertQueue(queue);
      this.channel.consume(queue, (message) => {
        if (!message) throw MessageBrokerNoMessageAvailableError;
        const data = JSON.parse(message.content.toString()) as T;
        this.message = message;
        this.onMessage(data);
      });
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw MessageBrokerFailedToConsumeMessageError;
    }
  };

  produceMessage = async (queue: Queues, data: T): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      const message = JSON.stringify(data);
      const buffer = Buffer.from(message);
      await this.channel.assertQueue(queue);
      this.channel.sendToQueue(queue, buffer);
    } catch (e) {
      console.log('🔥:', (e as Error).message);
      throw MessageBrokerFailedToSendMessageError;
    }
  };
}

export default RabbitMQ;
