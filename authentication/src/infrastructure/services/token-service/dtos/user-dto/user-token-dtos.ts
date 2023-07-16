import {
  Token,
} from '../token-dto/token-dtos';

export type UserToken = Readonly<{
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
} & Token>;

export type CreateUserToken = Omit<UserToken, 'iat' | 'exp'>;
