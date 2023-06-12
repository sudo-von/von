export type MessageBrokerCode =
| 'MESSAGE_BROKER_CHANNEL_IS_CLOSED_ERROR'
| 'MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE_ERROR'
| 'MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE_ERROR'
| 'MESSAGE_BROKER_FAILED_TO_CONNECT_ERROR'
| 'MESSAGE_BROKER_FAILED_TO_CLOSE_ERROR'
| 'MESSAGE_BROKER_NO_MESSAGE_AVAILABLE_ERROR';

export type MessageBrokerError = {
  code: MessageBrokerCode;
  message: string;
};

export const MESSAGE_BROKER_CHANNEL_IS_CLOSED: MessageBrokerError = {
  code: 'MESSAGE_BROKER_CHANNEL_IS_CLOSED_ERROR',
  message: 'The message broker channel is closed.',
};

export const MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_SEND_MESSAGE_ERROR',
  message: 'Failed to send message via the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CONSUME_MESSAGE_ERROR',
  message: 'Failed to consume message from the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_CONNECT: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CONNECT_ERROR',
  message: 'Failed to connect to the message broker.',
};

export const MESSAGE_BROKER_FAILED_TO_CLOSE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_FAILED_TO_CLOSE_ERROR',
  message: 'Failed to close the connection to the message broker.',
};

export const MESSAGE_BROKER_NO_MESSAGE_AVAILABLE: MessageBrokerError = {
  code: 'MESSAGE_BROKER_NO_MESSAGE_AVAILABLE_ERROR',
  message: 'No message available.',
};
