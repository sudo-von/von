import { MessageBrokerCode, MessageBrokerError } from './message-broker-errors';

export class MessageBrokerErrorFactory extends Error implements MessageBrokerError {
  constructor(
    public code: MessageBrokerCode,
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
