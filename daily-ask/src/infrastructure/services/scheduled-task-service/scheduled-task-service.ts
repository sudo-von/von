import LoggerService from '../logger-service/logger-service';

abstract class ScheduledTaskService {
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
  ) {}

  abstract processTask: () => Promise<void>;

  abstract validatePattern: (pattern: string) => boolean;

  abstract scheduleTask: (pattern: string) => Promise<void>;
}

export default ScheduledTaskService;
