import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const ScheduledTaskServiceFailedToProcessError = (
  taskId: string,
) => createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS',
  message: `Failed to process the following scheduled task: '${taskId}'.`,
});

export const ScheduledTaskServiceInvalidPatternError = (
  pattern: string,
) => createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_INVALID_PATTERN',
  message: `The following pattern: '${pattern}' is invalid.`,
});
