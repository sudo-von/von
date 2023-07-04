type UserMessageBroker = Readonly<{
  id: string;
  user_id: string;
  username: string;
}>;

export type CreateUserMessageBroker = Omit<UserMessageBroker, 'id'>;

export type UpdateUserMessageBroker = Omit<UserMessageBroker, 'id'>;
