/**
 * Interface for a scheduler service with read operations.
 * @interface
 */
interface ISchedulerServiceReader {
  /**
   * Validates the pattern for the scheduler.
   * @param {string} pattern - The pattern to validate.
   * @returns {boolean} Returns true if the pattern is valid, false otherwise.
   */
  validatePattern: (pattern: string)
  => boolean;

  /**
   * Schedules a task based on a pattern.
   * @param {string} pattern - The scheduling pattern for the task.
   * @param {Function} task - The callback function representing the task to be scheduled.
   */
  schedule: (pattern: string, task: Function)
  => void;
}

/**
 * An interface for a scheduler service that extends the reading capabilities.
 * @interface
 * @extends {ISchedulerServiceReader}
 */
interface ISchedulerService extends ISchedulerServiceReader {}

export default ISchedulerService;
