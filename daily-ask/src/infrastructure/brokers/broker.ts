import {
  Queue,
} from './broker-queues';
import LoggerService from '../services/logger-service/logger-service';

abstract class Broker<T> {
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
  ) {}

  abstract acknowledge: () => void;

  abstract connect(): Promise<void>;

  abstract onMessage: (data: T) => Promise<void>;

  abstract consume: (queue: Queue) => Promise<void>;

  abstract produce: (queue: Queue, data: T) => Promise<void>;
}

export default Broker;
