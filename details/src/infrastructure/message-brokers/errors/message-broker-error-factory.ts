import { MessageBrokerError, MessageBrokerErrorCode } from './message-broker-error-codes';

export class MessageBrokerErrorFactory extends Error implements MessageBrokerError {
  constructor(
    public code: MessageBrokerErrorCode,
    public message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, MessageBrokerErrorFactory.prototype);
  }
}

export const createMessageBrokerErrorFactory = ({
  code,
  message,
}: MessageBrokerError) => new MessageBrokerErrorFactory(code, message);
