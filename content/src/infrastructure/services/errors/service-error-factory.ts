import {
  ServiceError,
  ServiceErrorCode,
} from './service-error-codes';

export class ServiceErrorFactory extends Error implements ServiceError {
  constructor(
    public code: ServiceErrorCode,
    public message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, ServiceErrorFactory.prototype);
  }
}

export const createServiceErrorFactory = ({
  code,
  message,
}: ServiceError) => new ServiceErrorFactory(code, message);
