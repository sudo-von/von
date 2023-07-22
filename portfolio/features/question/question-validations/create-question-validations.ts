import {
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';

const validateQuestionCreation = (payload: CreateQuestion) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateQuestionCreation;
