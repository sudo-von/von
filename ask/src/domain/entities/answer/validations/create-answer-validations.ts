import {
  InvalidAnswerLengthError,
} from '../answer-errors';
import {
  CreateAnswer,
} from '../answer-entities';
import validateAnswerLength from './answer-validations';

const validateAnswerCreation = (payload: CreateAnswer) => {
  const isAnswerLengthValid = validateAnswerLength(payload.answer);
  if (!isAnswerLengthValid) throw InvalidAnswerLengthError;
};

export default validateAnswerCreation;
