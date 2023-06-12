import LoggerService from '../../domain/services/logger-service';

export type Queues = 'Profile:CreateProfile';

abstract class MessageBroker {
  abstract readonly BROKER_URL: string;

  constructor(protected logger: LoggerService) {}

  public abstract produceMessage: <T>(queue: Queues, data: T) => Promise<void>;

  public abstract consumeMessage: <T>(queue: Queues) => Promise<T>;

  public abstract connect(): Promise<void>;

  public abstract close(): Promise<void>;
}

export default MessageBroker;
