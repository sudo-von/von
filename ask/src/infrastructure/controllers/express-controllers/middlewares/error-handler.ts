import { NextFunction, Request, Response } from 'express';
import { DomainErrorCode } from '../../../../domain/errors/errors';
import { DomainErrorFactory } from '../../../../domain/errors/error-factory';
import { RequestErrorFactory } from '../../errors/request-error-factory';
import {
  AnswerNotFoundRequestError,
  InternalServerRequestError,
  InvalidQuestionLengthRequestError,
  PermissionDeniedRequestError,
  ProfileCreationFailedRequestError,
  ProfileNotFoundRequestError,
  QuestionCreationFailedRequestError,
  SingleProfileOnlyRequestError,
} from '../../errors/request-error-factories';

const domainErrors: Record<DomainErrorCode, RequestErrorFactory> = {
  INVALID_QUESTION_LENGTH_DOMAIN_ERROR: InvalidQuestionLengthRequestError,
  QUESTION_CREATION_FAILED_DOMAIN_ERROR: QuestionCreationFailedRequestError,
  PERMISSION_DENIED_DOMAIN_ERROR: PermissionDeniedRequestError,
  PROFILE_CREATION_FAILED_DOMAIN_ERROR: ProfileCreationFailedRequestError,
  PROFILE_NOT_FOUND_DOMAIN_ERROR: ProfileNotFoundRequestError,
  SINGLE_PROFILE_ONLY_DOMAIN_ERROR: SingleProfileOnlyRequestError,
  ANSWER_NOT_FOUND_DOMAIN_ERROR: AnswerNotFoundRequestError,
};

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof DomainErrorFactory) {
    const { message, statusCode, code } = domainErrors[error.code];
    return res.status(statusCode).json({ code, error: message });
  }
  return res.status(InternalServerRequestError.statusCode).json({
    code: InternalServerRequestError.code,
    error: InternalServerRequestError.message,
  });
};

export default errorHandler;
