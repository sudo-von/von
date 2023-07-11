import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const ScheduledTaskServiceFailedToProcess = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS',
  message: 'Failed to process the scheduled task.',
});

export const ScheduledTaskServiceInvalidExpression = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_INVALID_EXPRESSION',
  message: 'The provided expression is invalid.',
});
