import {
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateDailyQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';

const validateDailyQuestionCreation = (payload: CreateDailyQuestion) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateDailyQuestionCreation;
