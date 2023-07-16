import {
  Queue,
} from './broker-queues';
import LoggerService from '../services/logger-service/logger-service';

abstract class Broker<T> {
  /**
  * Creates an instance of Broker.
  * @param {string} url - The URL for communication.
  * @param {LoggerService} loggerService - The logger service to use.
  */
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
  ) {}

  /**
  * Acknowledges a message.
  */
  abstract acknowledge: () => void;

  /**
  * Connects to the communication service.
  * @returns {Promise<void>} A promise that resolves when the connection is established.
  */
  abstract connect(): Promise<void>;

  /**
  * Handles incoming messages or events.
  * @param {T} data - The incoming data.
  * @returns {Promise<void>} A promise that resolves when the message is processed.
  */
  abstract onMessage: (data: T) => Promise<void>;

  /**
  * Consumes messages from a specific queue.
  * @param {Queue} queue - The queue to consume from.
  * @returns {Promise<void>} A promise that resolves when the consumption is complete.
  */
  abstract consume: (queue: Queue) => Promise<void>;

  /**
  * Produces a message to a specific queue.
  * @param {Queue} queue - The queue to produce to.
  * @param {T} data - The data to produce.
  * @returns {Promise<void>} A promise that resolves when the production is complete.
  */
  abstract produce: (queue: Queue, data: T) => Promise<void>;
}

export default Broker;
