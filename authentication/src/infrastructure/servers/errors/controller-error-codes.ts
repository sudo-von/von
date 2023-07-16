import {
  UserDomainErrorCode,
  ProfilePictureDomainErrorCode,
} from '../../../domain/errors/error-codes';
import {
  FileServiceErrorCode,
  TokenServiceErrorCode,
  SecurityServiceErrorCode,
} from '../../services/errors/service-error-codes';

export type ControllerError = {
  code: ControllerErrorCode;
  message: string;
  statusCode: number;
};

export type ControllerErrorCode =
| FileServiceControllerErrorCode
| ProfilePictureControllerErrorCode
| RequestControllerErrorCode
| SecurityServiceControllerErrorCode
| TokenServiceControllerErrorCode
| UserControllerErrorCode;

export type FileServiceControllerErrorCode =
| FileServiceErrorCode;

export type ProfilePictureControllerErrorCode =
| ProfilePictureDomainErrorCode;

export type RequestControllerErrorCode =
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED'
| 'INTERNAL_SERVER'
| 'INVALID_FILE_PARAMETER_NAME'
| 'MISSING_AUTHORIZATION_HEADER'
| 'AUTHORIZATION_SCHEME_NOT_SUPPORTED';

export type SecurityServiceControllerErrorCode =
| SecurityServiceErrorCode;

export type TokenServiceControllerErrorCode =
| TokenServiceErrorCode;

export type UserControllerErrorCode =
| UserDomainErrorCode;
