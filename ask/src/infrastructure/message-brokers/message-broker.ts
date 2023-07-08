import {
  Queues,
} from './message-broker-queues';
import {
  MessageBrokerOnMessageNotImplementedError,
} from './message-broker-errors';
import LoggerService from '../services/logger-service/logger-service';

abstract class MessageBroker {
  constructor(
    protected readonly MESSAGE_BROKER_URL: string,
    protected readonly loggerService: LoggerService,
  ) {}

  public abstract ackMessage: () => void;

  public abstract connect(): Promise<void>;

  public abstract consumeMessage: (queue: Queues) => Promise<void>;

  public abstract produceMessage: (queue: Queues, data: Buffer) => Promise<void>;

  public onMessage = async (_data: Buffer): Promise<void> => {
    throw MessageBrokerOnMessageNotImplementedError;
  };
}

export default MessageBroker;
