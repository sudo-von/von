import {
  InvalidAskedByLengthError,
  InvalidQuestionLengthError,
} from '../daily-question-errors';
import {
  CreateDailyQuestion,
} from '../daily-question-entities';
import {
  validateAskedByLength,
  validateQuestionLength,
} from './daily-question-validations';

const validateDailyQuestionCreation = (payload: CreateDailyQuestion) => {
  const isAskedByLengthValid = validateAskedByLength(payload.askedBy);
  if (!isAskedByLengthValid) throw InvalidAskedByLengthError;

  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateDailyQuestionCreation;
