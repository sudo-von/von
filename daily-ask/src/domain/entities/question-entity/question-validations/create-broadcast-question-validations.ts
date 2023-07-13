import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  BroadcastQuestion,
} from '../question-entities';
import {
  validateAskedByLength,
  validateQuestionLength,
} from './question-validations';

const validateBroadcastQuestionCreation = (payload: BroadcastQuestion) => {
  const isAskedByLengthValid = validateAskedByLength(payload.askedBy);
  if (!isAskedByLengthValid) throw InvalidAskedByLengthError;

  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateBroadcastQuestionCreation;
