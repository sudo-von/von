import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import questionRules from './question-rules';

export const InvalidAskedByLengthError = createDomainErrorFactory({
  code: 'INVALID_ASKED_BY_LENGTH',
  message: `Please provide an asked by that consists of at least ${questionRules.question.content.MIN_LENGTH} characters.`,
});

export const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${questionRules.question.content.MIN_LENGTH} to ${questionRules.question.content.MAX_LENGTH} characters.`,
});
