import {
  InvalidAnswerLengthError,
} from '../answer-errors';
import {
  CreateDetailedAnswer,
} from '../answer-entities';
import validateAnswerLength from './answer-validations';

const validateAnswerCreation = (payload: CreateDetailedAnswer) => {
  const isAnswerLengthValid = validateAnswerLength(payload.answer);
  if (!isAnswerLengthValid) throw InvalidAnswerLengthError;
};

export default validateAnswerCreation;
