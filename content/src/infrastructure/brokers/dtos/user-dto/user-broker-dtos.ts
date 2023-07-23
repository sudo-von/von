type UserBroker = Readonly<{
  user_id: string;
  username: string;
}>;

export type CreateUserBroker = UserBroker;

export type UpdateUserBroker = UserBroker;
