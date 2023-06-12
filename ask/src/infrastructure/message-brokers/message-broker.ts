export type Queues = 'Profile:CreateProfile';

abstract class MessageBroker {
  constructor(
    protected readonly BROKER_URL: string,
  ) {}

  public abstract produceMessage: <T>(queue: Queues, data: T) => Promise<void>;

  public abstract consumeMessage: <T>(queue: Queues) => Promise<T>;

  public abstract connect(): Promise<void>;

  public abstract close(): Promise<void>;
}

export default MessageBroker;
