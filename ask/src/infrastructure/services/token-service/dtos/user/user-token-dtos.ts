import {
  Token,
} from '../token/token-dtos';

export type UserToken = Readonly<{
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture_name: string;
} & Token>;
