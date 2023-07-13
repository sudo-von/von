import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import questionRules from './question-rules';

export const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${questionRules.question.content.MIN_LENGTH} to ${questionRules.question.content.MAX_LENGTH} characters.`,
});

export const QuestionAlreadyAnsweredError = createDomainErrorFactory({
  code: 'QUESTION_ALREADY_ANSWERED',
  message: 'The question has already been answered.',
});

export const QuestionDeleteFailedError = createDomainErrorFactory({
  code: 'QUESTION_DELETE_FAILED',
  message: 'The question you attempted to delete could not be deleted.',
});

export const QuestionNotAnsweredError = createDomainErrorFactory({
  code: 'QUESTION_NOT_ANSWERED',
  message: 'The question has not been answered yet.',
});

export const QuestionNotFoundError = createDomainErrorFactory({
  code: 'QUESTION_NOT_FOUND',
  message: 'The requested question could not be found.',
});

export const QuestionUpdateFailedError = createDomainErrorFactory({
  code: 'QUESTION_UPDATE_FAILED',
  message: 'The question you attempted to update could not be updated.',
});
