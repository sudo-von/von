import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const ScheduledTaskServiceFailedToProcessError = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS',
  message: 'Failed to process the scheduled task.',
});

export const ScheduledTaskServiceInvalidPatternError = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_INVALID_PATTERN',
  message: 'The provided pattern is invalid.',
});
