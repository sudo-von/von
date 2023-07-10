import {
  Question,
} from '../question-entities';
import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  validateAskedByLength,
  validateQuestionLength,
} from './question-validations';

const validateQuestionCreation = (payload: Question) => {
  const isAskedByLengthValid = validateAskedByLength(payload.askedBy);
  if (!isAskedByLengthValid) throw InvalidAskedByLengthError;

  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateQuestionCreation;
