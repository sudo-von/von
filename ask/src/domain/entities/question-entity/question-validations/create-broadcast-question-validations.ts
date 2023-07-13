import {
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateBroadcastQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';

const validateBroadcastQuestionCreation = (payload: CreateBroadcastQuestion) => {
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateBroadcastQuestionCreation;
