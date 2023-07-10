import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import questionRules from './question-rules';

export const InvalidAskedByLengthError = createDomainErrorFactory({
  code: 'INVALID_ASKED_BY_LENGTH',
  message: 'The askedBy field is required."',
});

export const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${questionRules.question.MIN_LENGTH} to ${questionRules.question.MAX_LENGTH} characters.`,
});
