import {
  Queues,
} from './message-broker-queues';
import {
  MessageBrokerOnMessageNotImplementedError,
} from './message-broker-errors';
import LoggerService from '../services/logger-service/logger-service';

abstract class MessageBroker {
  constructor(
    protected readonly messageBrokerUrl: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract ackMessage: () => void;

  abstract connect(): Promise<void>;

  abstract consumeMessage: (queue: Queues) => Promise<void>;

  abstract produceMessage: (queue: Queues, data: Buffer) => Promise<void>;

  onMessage = async (_data: Buffer): Promise<void> => {
    throw MessageBrokerOnMessageNotImplementedError;
  };
}

export default MessageBroker;
