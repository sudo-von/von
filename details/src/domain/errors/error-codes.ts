export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export type DomainErrorCode =
| UserDomainErrorCode
| IntroductionDomainErrorCode
| CommonDomainErrorCode
| ProfileDomainErrorCode
| ExperienceDomainErrorCode
| CybersecurityDomainErrorCode;

export type UserDomainErrorCode =
| 'INVALID_USER_USERNAME_LENGTH_DOMAIN_ERROR'
| 'SINGLE_USER_ONLY_DOMAIN_ERROR'
| 'USER_CREATION_FAILED_DOMAIN_ERROR'
| 'USER_NOT_FOUND_DOMAIN_ERROR'
| 'USER_UPDATE_FAILED_DOMAIN_ERROR'
| 'USERNAME_ALREADY_EXISTS_DOMAIN_ERROR';

export type IntroductionDomainErrorCode =
| 'INTRODUCTION_CREATION_FAILED_DOMAIN_ERROR'
| 'INTRODUCTION_NOT_FOUND_DOMAIN_ERROR'
| 'INTRODUCTION_UPDATE_FAILED_DOMAIN_ERROR'
| 'INVALID_INTRODUCTION_DESCRIPTION_LENGTH_DOMAIN_ERROR'
| 'INVALID_INTRODUCTION_TITLE_LENGTH_DOMAIN_ERROR'
| 'SINGLE_INTRODUCTION_ONLY_DOMAIN_ERROR';

export type CommonDomainErrorCode =
| 'PERMISSION_DENIED_DOMAIN_ERROR';

export type ProfileDomainErrorCode =
| 'INVALID_PROFILE_INTEREST_LENGTH_DOMAIN_ERROR'
| 'INVALID_PROFILE_POSITION_LENGTH_DOMAIN_ERROR'
| 'INVALID_PROFILE_QUOTE_LENGTH_DOMAIN_ERROR'
| 'PROFILE_CREATION_FAILED_DOMAIN_ERROR'
| 'PROFILE_NOT_FOUND_DOMAIN_ERROR'
| 'PROFILE_UPDATE_FAILED_DOMAIN_ERROR'
| 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR';

export type ExperienceDomainErrorCode =
| 'EXPERIENCE_CREATION_FAILED_DOMAIN_ERROR'
| 'EXPERIENCE_NOT_FOUND_DOMAIN_ERROR'
| 'EXPERIENCE_UPDATE_FAILED_DOMAIN_ERROR'
| 'INVALID_EXPERIENCE_DESCRIPTION_LENGTH_DOMAIN_ERROR'
| 'INVALID_EXPERIENCE_TITLE_LENGTH_DOMAIN_ERROR'
| 'SINGLE_EXPERIENCE_ONLY_DOMAIN_ERROR';

export type CybersecurityDomainErrorCode =
| 'CYBERSECURITY_CREATION_FAILED_DOMAIN_ERROR'
| 'CYBERSECURITY_NOT_FOUND_DOMAIN_ERROR'
| 'CYBERSECURITY_UPDATE_FAILED_DOMAIN_ERROR'
| 'INVALID_CYBERSECURITY_DESCRIPTION_LENGTH_DOMAIN_ERROR'
| 'INVALID_CYBERSECURITY_TITLE_LENGTH_DOMAIN_ERROR'
| 'SINGLE_CYBERSECURITY_ONLY_DOMAIN_ERROR';
