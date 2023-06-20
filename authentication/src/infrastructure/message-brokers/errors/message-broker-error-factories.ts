import { createMessageBrokerErrorFactory } from './message-broker-error-factory';
import {
  MESSAGE_BROKER_FAILED_TO_CLOSE,
  MESSAGE_BROKER_CHANNEL_IS_CLOSED,
  MESSAGE_BROKER_FAILED_TO_CONNECT,
  MESSAGE_BROKER_NO_MESSAGE_AVAILABLE,
  MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE,
  MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE,
  MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED,
} from './message-broker-errors';

export const MessageBrokerFailedToCloseError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CLOSE,
);

export const MessageBrokerChannelIsClosedError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_CHANNEL_IS_CLOSED,
);

export const MessageBrokerFailedToConnectError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CONNECT,
);

export const MessageBrokerNoMessageAvailableError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_NO_MESSAGE_AVAILABLE,
);

export const MessageBrokerFailedToSendMessageError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE,
);

export const MessageBrokerFailedToConsumeMessageError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE,
);

export const MessageBrokerOnMessageNotImplementedError = createMessageBrokerErrorFactory(
  MESSAGE_BROKER_ON_MESSAGE_NOT_IMPLEMENTED,
);
