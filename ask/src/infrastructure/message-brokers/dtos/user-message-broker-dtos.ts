type UserPayloadMessageBroker = Readonly<{
  user_id: string;
  username: string;
}>;

export type CreateUserMessageBroker = UserPayloadMessageBroker;

export type UpdateUserMessageBroker = UserPayloadMessageBroker;
