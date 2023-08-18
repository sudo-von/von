import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import dailyQuestionRules from './daily-question-rules';

export const InvalidAskedByLengthError = createDomainErrorFactory({
  code: 'INVALID_ASKED_BY_LENGTH',
  message: `Please provide an asked by that consists of ${dailyQuestionRules.askedBy.MIN_LENGTH} to ${dailyQuestionRules.askedBy.MAX_LENGTH} characters.`,
});

export const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${dailyQuestionRules.question.MIN_LENGTH} to ${dailyQuestionRules.question.MAX_LENGTH} characters.`,
});
