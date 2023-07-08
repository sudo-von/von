import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import answerRules from './answer-rules';

export const AnswerCreationFailedError = createDomainErrorFactory({
  code: 'ANSWER_CREATION_FAILED',
  message: 'The answer you attempted to created could not be created.',
});

export const AnswerDeleteFailedError = createDomainErrorFactory({
  code: 'ANSWER_DELETE_FAILED',
  message: 'The answer you attempted to delete could not be deleted.',
});

export const AnswerNotFoundError = createDomainErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: 'The requested answer could not be found.',
});

export const AnswerUpdateFailedError = createDomainErrorFactory({
  code: 'ANSWER_UPDATE_FAILED',
  message: 'The answer you attempted to update could not be updated.',
});

export const InvalidAnswerLengthError = createDomainErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: `Please provide an answer that consists of ${answerRules.answer.MIN_LENGTH} to ${answerRules.answer.MAX_LENGTH} characters.`,
});
