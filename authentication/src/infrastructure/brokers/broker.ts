import {
  Exchange,
} from './broker-exchanges';
import LoggerService from '../services/logger-service/logger-service';

/**
 * Abstract class representing a service for messaging.
 * @abstract
 */
abstract class Broker<T> {
  /**
   * Creates an instance of Broker.
   * @param {string} url - The URL for communication.
   * @param {LoggerService} loggerService - The logger service.
   */
  constructor(
    protected readonly url: string,
    protected readonly loggerService: LoggerService,
  ) {}

  /**
   * Acknowledges a message.
   */
  abstract acknowledge: ()
  => void;

  /**
   * Connects to the communication service.
   * @returns {Promise<void>} A promise that resolves when the connection is established.
   */
  abstract connect: ()
  => Promise<void>;

  /**
   * Handles incoming messages.
   * @param {T} data - The incoming data.
   * @returns {Promise<void>} A promise that resolves when the message is processed.
   */
  abstract onMessage: (_data: T)
  => Promise<void>;

  /**
   * Consumes messages from a specific exchange.
   * @param {Exchange} exchange - The exchange to consume from.
   * @returns {Promise<void>} A promise that resolves when the consumption is complete.
   */
  abstract consume: (exchange: Exchange)
  => Promise<void>;

  /**
   * Produces a message to a specific exchange.
   * @param {Exchange} exchange - The exchange to produce to.
   * @param {T} data - The data to produce.
   * @returns {Promise<void>} A promise that resolves when the production is complete.
   */
  abstract produce: (exchange: Exchange, data: T)
  => Promise<void>;
}

export default Broker;
