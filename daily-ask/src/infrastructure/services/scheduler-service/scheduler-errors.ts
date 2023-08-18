import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

export const SchedulerServiceCallbackFailedError = (
  details:string,
) => createServiceErrorFactory({
  code: 'SCHEDULER_SERVICE_CALLBACK_FAILED',
  message: `Callback execution failed: '${details}'.`,
});

export const SchedulerServiceInvalidPatternError = (
  pattern: string,
) => createServiceErrorFactory({
  code: 'SCHEDULER_SERVICE_INVALID_PATTERN',
  message: `The following pattern: '${pattern}' is invalid.`,
});
