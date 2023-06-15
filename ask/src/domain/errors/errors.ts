import { createQuestionRules } from '../entities/validations/question-validations';

export type DomainErrorCode =
  | 'INVALID_QUESTION_LENGTH_DOMAIN_ERROR'
  | 'QUESTION_CREATION_FAILED_DOMAIN_ERROR'
  | 'PROFILE_CREATION_FAILED_DOMAIN_ERROR'
  | 'PROFILE_NOT_FOUND_DOMAIN_ERROR'
  | 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR';

export type DomainError = {
  code: DomainErrorCode;
  message: string;
};

export const INVALID_QUESTION_LENGTH: DomainError = {
  code: 'INVALID_QUESTION_LENGTH_DOMAIN_ERROR',
  message: `Please provide a question that consists of ${createQuestionRules.question.MIN_LENGTH} to ${createQuestionRules.question.MAX_LENGTH} characters.`,
};

export const QUESTION_CREATION_FAILED: DomainError = {
  code: 'QUESTION_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Question creation failed.',
};

export const PROFILE_CREATION_FAILED: DomainError = {
  code: 'PROFILE_CREATION_FAILED_DOMAIN_ERROR',
  message: 'Profile creation failed.',
};

export const PROFILE_NOT_FOUND: DomainError = {
  code: 'PROFILE_NOT_FOUND_DOMAIN_ERROR',
  message: 'Profile not found.',
};

export const SINGLE_PROFILE_ONLY: DomainError = {
  code: 'SINGLE_PROFILE_ONLY_DOMAIN_ERROR',
  message: 'Only one profile is allowed.',
};
