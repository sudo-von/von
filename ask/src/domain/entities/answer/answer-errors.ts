import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import answerRules from './answer-rules';

export const AnswerNotFoundError = createDomainErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: 'Answer not found.',
});

export const InvalidAnswerLengthError = createDomainErrorFactory({
  code: 'INVALID_ANSWER_LENGTH',
  message: `Please provide a question that consists of ${answerRules.answer.MIN_LENGTH} to ${answerRules.answer.MAX_LENGTH} characters.`,
});
