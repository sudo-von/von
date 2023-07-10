import LoggerService from '../logger-service/logger-service';

abstract class ScheduledTaskService {
  constructor(
    protected loggerService: LoggerService,
  ) {}

  abstract scheduleTask: (identifier: string, expression: string) => Promise<void>;
}

export default ScheduledTaskService;
