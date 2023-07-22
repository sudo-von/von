import {
  InvalidQuestionLengthError,
} from '../question-errors';
import {
  CreateQuestion,
} from '../question-entities';
import validateQuestionLength from './question-validations';

const validateQuestionCreation = (payload: CreateQuestion) => {
  console.log("🚀 ~ file: create-question-validations.ts:10 ~ validateQuestionCreation ~ payload:", payload.question.length)
  const isQuestionLengthValid = validateQuestionLength(payload.question);
  if (!isQuestionLengthValid) throw InvalidQuestionLengthError;
};

export default validateQuestionCreation;
