import {
  Token,
} from '../token-dto/token-dtos';

export type UserToken = Readonly<{
  id: string;
  username: string;
} & Token>;
