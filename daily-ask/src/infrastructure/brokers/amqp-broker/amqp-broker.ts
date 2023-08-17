import {
  connect,
  Channel,
  Connection,
  ConsumeMessage,
} from 'amqplib';
import {
  Exchange,
} from '../broker-exchanges';
import Broker from '../broker';
import {
  BrokerFailedToAckError,
  BrokerChannelIsClosedError,
  BrokerFailedToConnectError,
  BrokerNoMessageAvailableError,
  BrokerFailedToSendMessageError,
  BrokerFailedToConsumeMessageError,
  BrokerOnMessageNotImplementedError,
} from '../errors/broker-errors';

abstract class AMQPBroker<T> extends Broker<T> {
  protected channel?: Channel;

  protected connection?: Connection;

  protected message?: ConsumeMessage;

  acknowledge = (): void => {
    try {
      if (!this.channel) throw BrokerChannelIsClosedError;
      if (!this.message) throw BrokerNoMessageAvailableError;

      this.channel.ack(this.message);
      this.message = undefined;
    } catch (e) {
      this.loggerService.error(BrokerFailedToAckError.message, e as Error);
    }
  };

  connect = async (): Promise<void> => {
    try {
      if (!this.connection) this.connection = await connect(this.url);
      if (!this.channel) this.channel = await this.connection.createChannel();
    } catch (e) {
      this.loggerService.error(BrokerFailedToConnectError.message, e as Error);
      throw BrokerFailedToConnectError;
    }
  };

  consume = async (exchange: Exchange): Promise<void> => {
    try {
      if (!this.channel) throw BrokerChannelIsClosedError;

      await this.channel.assertExchange(exchange, 'fanout', { durable: false });

      const { queue } = await this.channel.assertQueue('', {
        exclusive: true,
      });

      this.channel.bindQueue(queue, exchange, '');

      this.channel.consume(queue, (message) => {
        if (!message) throw BrokerNoMessageAvailableError;

        const data = JSON.parse(message.content.toString());

        this.message = message;
        this.onMessage(data);
      });
    } catch (e) {
      this.loggerService.error(BrokerFailedToConsumeMessageError.message, e as Error);
    }
  };

  produce = async (exchange: Exchange, data: T): Promise<void> => {
    try {
      if (!this.channel) throw BrokerChannelIsClosedError;

      await this.channel.assertExchange(exchange, 'fanout', { durable: false });

      const buffer = Buffer.from(JSON.stringify(data));

      this.channel.publish(exchange, '', buffer);
    } catch (e) {
      this.loggerService.error(BrokerFailedToSendMessageError.message, e as Error);
    }
  };

  onMessage = (_data: T): Promise<void> => {
    throw BrokerOnMessageNotImplementedError;
  };
}

export default AMQPBroker;
