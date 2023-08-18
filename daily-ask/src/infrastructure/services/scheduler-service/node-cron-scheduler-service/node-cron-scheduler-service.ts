import {
  schedule,
  validate,
} from 'node-cron';
import {
  SchedulerServiceUnexpectedError,
  SchedulerServiceCallbackFailedError,
  SchedulerServiceInvalidPatternError,
} from '../scheduler-errors';
import SchedulerService from '../scheduler-service';

class NodeCronSchedulerService implements SchedulerService {
  validatePattern = (
    pattern: string,
  ): boolean => validate(pattern);

  scheduleTask = (
    pattern: string,
    callback: Function,
  ): void => {
    try {
      const isPatternValid = this.validatePattern(pattern);
      if (!isPatternValid) throw SchedulerServiceInvalidPatternError(pattern);

      schedule(pattern, () => {
        try {
          callback();
        } catch (e) {
          throw SchedulerServiceCallbackFailedError((e as Error).message);
        }
      });
    } catch (e) {
      throw SchedulerServiceUnexpectedError((e as Error).message);
    }
  };
}

export default NodeCronSchedulerService;
