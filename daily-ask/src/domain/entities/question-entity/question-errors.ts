import {
  createDomainErrorFactory,
} from '../../errors/error-factory';
import questionRules from './question-rules';

const InvalidQuestionLengthError = createDomainErrorFactory({
  code: 'INVALID_QUESTION_LENGTH',
  message: `Please provide a question that consists of ${questionRules.question.MIN_LENGTH} to ${questionRules.question.MAX_LENGTH} characters.`,
});

export default InvalidQuestionLengthError;
