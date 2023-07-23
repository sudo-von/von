import {
  BrokerError,
  BrokerErrorCode,
} from './broker-error-codes';

export class BrokerErrorFactory extends Error implements BrokerError {
  constructor(
    public code: BrokerErrorCode,
    public message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, BrokerErrorFactory.prototype);
  }
}

export const createMessageBrokerErrorFactory = ({
  code,
  message,
}: BrokerError) => new BrokerErrorFactory(code, message);
