import {
  Token,
} from '../token-entity/token-entities';

export type User = {
  id: string;
  username: string;
};

export type UserToken = User & Token;
