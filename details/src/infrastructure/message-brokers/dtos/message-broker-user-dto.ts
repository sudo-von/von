type MessageBrokerUserDto = Readonly<{
  id: string;
  user_id: string;
  username: string;
}>;

export type MessageBrokerCreateUserDto = Omit<MessageBrokerUserDto, 'id'>;

export type MessageBrokerUpdateUserDto = Omit<MessageBrokerUserDto, 'id'>;
