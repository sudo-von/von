import LoggerService from '../logger-service/logger-service';

abstract class ScheduledTaskService {
  constructor(
    protected taskId: string,
    protected loggerService: LoggerService,
  ) {}

  abstract processTask: () => Promise<void>;

  abstract validateExpression: (expression: string) => boolean;

  abstract scheduleTask: (expression: string) => Promise<void>;
}

export default ScheduledTaskService;
