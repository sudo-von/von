import {
  Question,
} from '../question-entities';
import validateQuestionLength from './question-validations';
import InvalidQuestionLengthError from '../question-errors';

const validateQuestionCreation = (payload: Question) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateQuestionCreation;
