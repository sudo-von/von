import {
  createDomainErrorFactory,
} from '../../errors/error-factory';

const AnswerNotFoundError = createDomainErrorFactory({
  code: 'ANSWER_NOT_FOUND',
  message: 'Answer not found.',
});

export default AnswerNotFoundError;
