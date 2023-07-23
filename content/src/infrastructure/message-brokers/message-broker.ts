import { MessageBrokerOnMessageNotImplementedError } from './errors/message-broker-errors';

export type Queues =
  | 'User:CreateUser'
  | 'User:UpdateUser';

abstract class MessageBroker<T> {
  constructor(protected readonly MESSAGE_BROKER_URL: string) {}

  public abstract ackMessage: () => void;

  public abstract close(): Promise<void>;

  public abstract connect(): Promise<void>;

  public abstract consumeMessage: (queue: Queues) => Promise<void>;

  public abstract produceMessage: (queue: Queues, data: T) => Promise<void>;

  public onMessage = async (_data: T): Promise<void> => {
    throw MessageBrokerOnMessageNotImplementedError;
  };
}

export default MessageBroker;
