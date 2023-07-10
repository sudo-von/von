import {
  createMessageBrokerErrorFactory,
} from './errors/message-broker-error-factory';

export const MessageBrokerChannelIsClosedError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_CHANNEL_IS_CLOSED',
  message: 'The message broker channel has been closed unexpectedly.',
});

export const MessageBrokerFailedToAckError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_ACK',
  message: 'Failed to acknowledge the message successfully.',
});

export const MessageBrokerFailedToConnectError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_CONNECT',
  message: 'Failed to establish a connection with the message broker.',
});

export const MessageBrokerFailedToConsumeMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE',
  message: 'Failed to successfully consume a message from the message broker.',
});

export const MessageBrokerFailedToProcessMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_PROCESS_MESSAGE',
  message: 'Failed to process the message.',
});

export const MessageBrokerFailedToSendMessageError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE',
  message: 'Failed to successfully send the message via the message broker.',
});

export const MessageBrokerNoMessageAvailableError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_NO_MESSAGE_AVAILABLE',
  message: 'There are no messages available.',
});

export const MessageBrokerOnMessageNotImplementedError = createMessageBrokerErrorFactory({
  code: 'MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED',
  message: 'The message broker does not provide an implementation for the onMessage method.',
});
