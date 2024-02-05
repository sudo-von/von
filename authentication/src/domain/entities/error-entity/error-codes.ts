import {
  UserDomainErrorCodes,
} from '../user-entity/user-error-codes';
import {
  AvatarDomainErrorCodes,
} from '../avatar-entity/avatar-error-codes';
import {
  UserDetailsDomainErrorCodes,
} from '../user-details-entity/user-details-error-codes';
import {
  SocialNetworkDomainErrorCodes,
} from '../social-network-entity/social-network-error-codes';

export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
  | AvatarDomainErrorCodes
  | UserDetailsDomainErrorCodes
  | UserDomainErrorCodes
  | SocialNetworkDomainErrorCodes;
