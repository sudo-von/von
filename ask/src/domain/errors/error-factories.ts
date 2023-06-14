import { createDomainErrorFactory } from './error-factory';
import {
  INVALID_QUESTION_LENGTH,
  PROFILE_CREATION_FAILED,
  PROFILE_NOT_FOUND,
  QUESTION_CREATION_FAILED,
  SINGLE_PROFILE_ONLY,
} from './errors';

export const InvalidQuestionLengthError = createDomainErrorFactory(INVALID_QUESTION_LENGTH);
export const QuestionCreationFailedError = createDomainErrorFactory(QUESTION_CREATION_FAILED);
export const ProfileCreationFailedError = createDomainErrorFactory(PROFILE_CREATION_FAILED);
export const ProfileNotFoundError = createDomainErrorFactory(PROFILE_NOT_FOUND);
export const SingleProfileOnlyError = createDomainErrorFactory(SINGLE_PROFILE_ONLY);
