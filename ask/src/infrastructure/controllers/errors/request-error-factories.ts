import { createRequestErrorFactory } from './request-error-factory';
import {
  INVALID_QUESTION_LENGTH_REQUEST,
  QUESTION_CREATION_FAILED_REQUEST,
  PROFILE_CREATION_FAILED_REQUEST,
  PROFILE_NOT_FOUND_REQUEST,
  SINGLE_PROFILE_ONLY_REQUEST,
  INTERNAL_SERVER_REQUEST,
  PERMISSION_DENIED_REQUEST,
} from './request-errors';

export const InvalidQuestionLengthRequestError = createRequestErrorFactory(
  INVALID_QUESTION_LENGTH_REQUEST,
);

export const QuestionCreationFailedRequestError = createRequestErrorFactory(
  QUESTION_CREATION_FAILED_REQUEST,
);

export const PermissionDeniedRequestError = createRequestErrorFactory(
  PERMISSION_DENIED_REQUEST,
);

export const ProfileCreationFailedRequestError = createRequestErrorFactory(
  PROFILE_CREATION_FAILED_REQUEST,
);

export const ProfileNotFoundRequestError = createRequestErrorFactory(
  PROFILE_NOT_FOUND_REQUEST,
);

export const SingleProfileOnlyRequestError = createRequestErrorFactory(
  SINGLE_PROFILE_ONLY_REQUEST,
);

export const InternalServerRequestError = createRequestErrorFactory(
  INTERNAL_SERVER_REQUEST,
);
