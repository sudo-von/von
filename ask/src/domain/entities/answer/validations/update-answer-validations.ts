import {
  InvalidAnswerLengthError,
} from '../answer-errors';
import {
  UpdateAnswer,
} from '../answer-entities';
import validateAnswerLength from './answer-validations';

const validateAnswerUpdate = (payload: UpdateAnswer) => {
  const isAnswerLengthValid = validateAnswerLength(payload.answer);
  if (!isAnswerLengthValid) throw InvalidAnswerLengthError;
};

export default validateAnswerUpdate;
