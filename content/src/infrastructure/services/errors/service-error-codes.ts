export type ServiceError = {
  code: ServiceErrorCode;
  message: string;
};

export type ServiceErrorCode =
| TokenServiceErrorCode;

export type TokenServiceErrorCode =
| 'TOKEN_SERVICE_INVALID_TOKEN_ERROR'
| 'TOKEN_SERVICE_EXPIRED_TOKEN_ERROR';
