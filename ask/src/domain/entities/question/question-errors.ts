import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import questionRules from './question-rules';

export const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${questionRules.question.MIN_LENGTH} to ${questionRules.question.MAX_LENGTH} characters.`,
});

export const QuestionAlreadyAnsweredError = createDomainErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  message: 'Question already answered.',
});

export const QuestionNotAnsweredError = createDomainErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  message: 'Question has not been answered yet.',
});

export const QuestionNotFoundError = createDomainErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  message: 'Question not found.',
});

export const QuestionUpdateFailedError = createDomainErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  message: 'Question update failed.',
});
