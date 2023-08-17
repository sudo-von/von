import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateDailyQuestion,
} from '../question-entities';
import {
  validateAskedByLength,
  validateQuestionLength,
} from './question-validations';

const validateDailyQuestionCreation = (payload: CreateDailyQuestion) => {
  const isAskedByLengthValid = validateAskedByLength(payload.askedBy);
  if (!isAskedByLengthValid) throw InvalidAskedByLengthError;

  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateDailyQuestionCreation;
