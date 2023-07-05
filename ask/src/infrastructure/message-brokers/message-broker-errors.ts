import {
  createMessageBrokerErrorFactory,
} from './errors/message-broker-error-factory';

export const MessageBrokerChannelIsClosedError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_CHANNEL_IS_CLOSED',
  message: 'The message broker channel is closed.',
});

export const MessageBrokerFailedToCloseError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_CLOSE',
  message: 'Failed to close the connection to the message broker.',
});

export const MessageBrokerFailedToConnectError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_CONNECT',
  message: 'Failed to connect to the message broker.',
});

export const MessageBrokerFailedToConsumeMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE',
  message: 'Failed to consume message from the message broker.',
});

export const MessageBrokerFailedToProcessMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_PROCESS_MESSAGE',
  message: 'Failed to process message.',
});

export const MessageBrokerFailedToSendMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE',
  message: 'Failed to send message via the message broker.',
});

export const MessageBrokerNoMessageAvailableError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_NO_MESSAGE_AVAILABLE',
  message: 'No message available.',
});

export const MessageBrokerOnMessageNotImplementedError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED',
  message: 'The message broker does not have an implementation for the onMessage method.',
});
