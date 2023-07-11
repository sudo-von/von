import {
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateGlobalQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';

const validateGlobalQuestionCreation = (payload: CreateGlobalQuestion) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateGlobalQuestionCreation;
