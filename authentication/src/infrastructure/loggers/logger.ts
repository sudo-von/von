/**
 * Represents a writer interface for logging messages.
 * @interface
 */
interface ILoggerWriter {
  /**
   * Logs an informational message.
   * @param {string} message - The message to log.
   */
  info: (message: string)
  => void;
}

/**
 * Represents a logger interface with writer capabilities.
 * @interface
 * @extends {ILoggerWriter}
 */
interface ILogger extends ILoggerWriter {}

export default ILogger;
