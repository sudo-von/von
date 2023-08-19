import {
  InvalidAnswerLengthError,
} from '../answer-errors';
import {
  UpdateDetailedAnswer,
} from '../answer-entities';
import validateAnswerLength from './answer-validations';

const validateAnswerUpdate = (payload: UpdateDetailedAnswer) => {
  const isAnswerLengthValid = validateAnswerLength(payload.answer);
  if (!isAnswerLengthValid) throw InvalidAnswerLengthError;
};

export default validateAnswerUpdate;
