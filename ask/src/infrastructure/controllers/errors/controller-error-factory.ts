import { ControllerError, ControllerErrorCode } from './controller-error-codes';

export class ControllerErrorFactory extends Error implements ControllerError {
  constructor(
    public code: ControllerErrorCode,
    public message: string,
    public statusCode: number,
  ) {
    super(message);
    Object.setPrototypeOf(this, ControllerErrorFactory.prototype);
  }
}

export const createControllerErrorFactory = ({
  code,
  message,
  statusCode,
}: ControllerError) => new ControllerErrorFactory(code, message, statusCode);
