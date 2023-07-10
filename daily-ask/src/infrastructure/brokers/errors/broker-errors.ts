import {
  createMessageBrokerErrorFactory,
} from './broker-error-factory';

export const BrokerChannelIsClosedError = createMessageBrokerErrorFactory({
  code: 'BROKER_CHANNEL_IS_CLOSED',
  message: 'The message broker channel has been closed unexpectedly.',
});

export const BrokerFailedToAckError = createMessageBrokerErrorFactory({
  code: 'BROKER_FAILED_TO_ACK',
  message: 'Failed to acknowledge the message successfully.',
});

export const BrokerFailedToConnectError = createMessageBrokerErrorFactory({
  code: 'BROKER_FAILED_TO_CONNECT',
  message: 'Failed to establish a connection with the message broker.',
});

export const BrokerFailedToConsumeMessageError = createMessageBrokerErrorFactory({
  code: 'BROKER_FAILED_TO_CONSUME_MESSAGE',
  message: 'Failed to successfully consume a message from the message broker.',
});

export const BrokerFailedToProcessMessageError = createMessageBrokerErrorFactory({
  code: 'BROKER_FAILED_TO_PROCESS_MESSAGE',
  message: 'Failed to process the message.',
});

export const BrokerFailedToSendMessageError = createMessageBrokerErrorFactory({
  code: 'BROKER_FAILED_TO_SEND_MESSAGE',
  message: 'Failed to successfully send the message via the message broker.',
});

export const BrokerNoMessageAvailableError = createMessageBrokerErrorFactory({
  code: 'BROKER_NO_MESSAGE_AVAILABLE',
  message: 'There are no messages available.',
});

export const BrokerOnMessageNotImplementedError = createMessageBrokerErrorFactory({
  code: 'BROKER_ON_MESSAGE_NOT_IMPLEMENTED',
  message: 'The message broker does not provide an implementation for the onMessage method.',
});
