import {
  DomainError,
  DomainErrorCode,
} from './error-codes';

export class DomainErrorFactory extends Error implements DomainError {
  constructor(public code: DomainErrorCode, public error: string) {
    super(error);
    Object.setPrototypeOf(this, DomainErrorFactory.prototype);
  }
}

export const createDomainErrorFactory = ({
  code,
  error,
}: DomainError) => new DomainErrorFactory(code, error);
