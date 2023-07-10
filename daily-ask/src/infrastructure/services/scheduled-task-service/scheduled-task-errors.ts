import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

const ScheduledTaskServiceFailedToProcessTask = createServiceErrorFactory({
  code: 'SCHEDULED_TASK_SERVICE_FAILED_TO_PROCESS_TASK',
  message: 'Failed to process the scheduled task.',
});

export default ScheduledTaskServiceFailedToProcessTask;
