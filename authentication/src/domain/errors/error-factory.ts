import { DomainError, DomainErrorCode } from './errors';

export class DomainErrorFactory extends Error implements DomainError {
  constructor(public code: DomainErrorCode, public message: string) {
    super(message);
    Object.setPrototypeOf(this, DomainErrorFactory.prototype);
  }
}

export const createDomainErrorFactory = ({
  code,
  message,
}: DomainError) => new DomainErrorFactory(code, message);
