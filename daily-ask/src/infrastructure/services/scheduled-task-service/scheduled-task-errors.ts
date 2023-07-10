import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

const ScheduledTaskServiceFailedToProcess = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS',
  message: 'Failed to process the scheduled task.',
});

export default ScheduledTaskServiceFailedToProcess;
