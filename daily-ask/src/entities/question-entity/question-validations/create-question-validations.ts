import {
  CreateQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';
import InvalidQuestionLengthError from '../question-errors';

const validateQuestionCreation = (payload: CreateQuestion) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateQuestionCreation;
