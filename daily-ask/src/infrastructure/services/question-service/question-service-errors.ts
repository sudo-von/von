import {
  createServiceErrorFactory,
} from '../errors/service-error-factory';

const QuestionServiceFailedToProcessError = createServiceErrorFactory({
  code: 'QUESTION_SERVICE_FAILED_TO_PROCESS',
  message: 'Failed to process the question successfully.',
});

export default QuestionServiceFailedToProcessError;
