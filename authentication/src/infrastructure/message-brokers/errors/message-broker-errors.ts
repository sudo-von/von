import {
  MessageBrokerError,
} from './message-broker-error-codes';
import {
  createMessageBrokerErrorFactory,
} from './message-broker-error-factory';

export const MESSAGE_BROKER_CHANNEL_IS_CLOSED: MessageBrokerError = {
  code: 'MESSAGE_BROKER_CHANNEL_IS_CLOSED_ERROR',
  message: 'The message broker channel is closed.',
};

export const MESSAGE_BROKER_FAILED_TO_CLOSE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CLOSE_ERROR',
  message: 'Failed to close the connection to the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_CONNECT: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CONNECT_ERROR',
  message: 'Failed to connect to the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE_ERROR',
  message: 'Failed to consume message from the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE_ERROR',
  message: 'Failed to send message via the message broker.',
};

export const MESSAGE_BROKER_NO_MESSAGE_AVAILABLE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_NO_MESSAGE_AVAILABLE_ERROR',
  message: 'No message available.',
};

export const MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED: MessageBrokerError = {
  code: 'MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED_ERROR',
  message: 'The message broker does not have an implementation for the onMessage method.',
};

export const MessageBrokerChannelIsClosedError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_CHANNEL_IS_CLOSED,
);

export const MessageBrokerFailedToCloseError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CLOSE,
);

export const MessageBrokerFailedToConnectError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CONNECT,
);

export const MessageBrokerFailedToConsumeMessageError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE,
);

export const MessageBrokerFailedToSendMessageError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE,
);

export const MessageBrokerNoMessageAvailableError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_NO_MESSAGE_AVAILABLE,
);

export const MessageBrokerOnMessageNotImplementedError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED,
);
