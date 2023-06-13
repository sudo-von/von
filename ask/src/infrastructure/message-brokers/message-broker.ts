export type Queues = 'Profile:CreateProfile';

abstract class MessageBroker<T> {
  constructor(protected readonly BROKER_URL: string) {}

  public abstract connect(): Promise<void>;

  public abstract close(): Promise<void>;

  public abstract produceMessage: (queue: Queues, data: T) => Promise<void>;

  public abstract consumeMessage: (queue: Queues) => Promise<void>;

  public abstract onMessage: (data: T) => Promise<void>;
}

export default MessageBroker;
