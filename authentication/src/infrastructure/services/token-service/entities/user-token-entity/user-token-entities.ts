import {
  Token,
} from '../token-entity/token-entities';

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export type UserToken = User & Token;

export type CreateUserToken = User;
