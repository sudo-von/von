import amqp, {
  Channel,
  Connection,
} from 'amqplib';
import {
  MessageBrokerFailedToAckError,
  MessageBrokerChannelIsClosedError,
  MessageBrokerFailedToConnectError,
  MessageBrokerNoMessageAvailableError,
  MessageBrokerFailedToSendMessageError,
  MessageBrokerFailedToConsumeMessageError,
} from '../message-broker-errors';
import {
  Queues,
} from '../message-broker-queues';
import MessageBroker from '../message-broker';

abstract class RabbitMQ extends MessageBroker {
  protected channel?: Channel;

  protected connection?: Connection;

  protected message?: amqp.ConsumeMessage;

  ackMessage = (): void => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      if (!this.message) throw MessageBrokerNoMessageAvailableError;
      this.channel.ack(this.message);
      this.message = undefined;
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToAckError.message, e as Error);
    }
  };

  connect = async (): Promise<void> => {
    try {
      if (!this.connection) this.connection = await amqp.connect(this.MESSAGE_BROKER_URL);
      if (!this.channel) this.channel = await this.connection.createChannel();
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToConnectError.message, e as Error);
      throw MessageBrokerFailedToConnectError;
    }
  };

  consumeMessage = async (queue: Queues): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      await this.channel.assertQueue(queue);
      this.channel.consume(queue, (message) => {
        if (!message) throw MessageBrokerNoMessageAvailableError;
        this.message = message;
        this.onMessage(message.content);
      });
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToConsumeMessageError.message, e as Error);
    }
  };

  produceMessage = async (queue: Queues, data: Buffer): Promise<void> => {
    try {
      if (!this.channel) throw MessageBrokerChannelIsClosedError;
      await this.channel.assertQueue(queue);
      this.channel.sendToQueue(queue, data);
    } catch (e) {
      this.loggerService.error(MessageBrokerFailedToSendMessageError.message, e as Error);
    }
  };
}

export default RabbitMQ;
