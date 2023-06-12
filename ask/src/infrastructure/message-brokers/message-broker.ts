export type Queues = 'Profile:CreateProfile';

abstract class MessageBroker {
  constructor(
    protected readonly BROKER_URL: string,
  ) {}

  public abstract onMessage: <T>(data: T) => Promise<void>;

  public abstract produceMessage: <T>(queue: Queues, data: T) => Promise<void>;

  public abstract consumeMessage: <T>(queue: Queues) => Promise<void>;

  public abstract connect(): Promise<void>;

  public abstract close(): Promise<void>;
}

export default MessageBroker;
