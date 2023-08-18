import {
  schedule,
  validate,
} from 'node-cron';
import {
  SchedulerServiceCallbackFailedError,
  SchedulerServiceInvalidPatternError,
} from '../scheduler-errors';
import SchedulerService from '../scheduler-service';

class CronSchedulerService implements SchedulerService {
  validatePattern = (
    pattern: string,
  ): boolean => validate(pattern);

  schedule = (
    pattern: string,
    callback: Function,
  ): void => {
    const isPatternValid = this.validatePattern(pattern);
    if (!isPatternValid) throw SchedulerServiceInvalidPatternError(pattern);

    schedule(pattern, () => {
      try {
        callback();
      } catch (e) {
        throw SchedulerServiceCallbackFailedError((e as Error).message);
      }
    });
  };
}

export default CronSchedulerService;
