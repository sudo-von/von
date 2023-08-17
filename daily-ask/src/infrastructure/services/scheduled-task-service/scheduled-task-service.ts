import LoggerService from '../logger-service/logger-service';

/**
 * Abstract class representing a scheduled task service.
 * @abstract
 */
abstract class ScheduledTaskService {
  /**
   * Creates an instance of ScheduledTaskService.
   * @constructor
   * @param {string} taskId - The id of the task.
   * @param {LoggerService} loggerService - The logger service.
   */
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
  ) {}

  /**
   * Processes the scheduled task.
   * @returns {Promise<void>} A promise that resolves when the task is processed.
   */
  abstract processTask: ()
  => Promise<void>;

  /**
   * Validates the pattern for the scheduled task.
   * @param {string} pattern - The pattern to validate.
   * @returns {boolean} True if the pattern is valid, false otherwise.
   */
  abstract validatePattern: (pattern: string)
  => boolean;

  /**
   * Schedules the task based on the provided pattern.
   * @param {string} pattern - The pattern for scheduling the task.
   * @returns {Promise<void>} A promise that resolves when the task is scheduled.
   */
  abstract scheduleTask: (pattern: string)
  => Promise<void>;
}

export default ScheduledTaskService;
