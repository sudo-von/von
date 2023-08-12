/**
 * Abstract class representing a service for logging messages.
 * @abstract
 */
abstract class LoggerService {
  /**
   * Logs an informational message.
   * @param {string} message - The message to log.
   */
  abstract info: (message: string)
  => void;

  /**
   * Logs an error message with an associated Error object.
   * @param {string} message - The error message to log.
   * @param {Error} error - The Error object associated with the error.
   */
  abstract error: (message: string, error: Error)
  => void;
}

export default LoggerService;
