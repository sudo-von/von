import { AboutDto } from './about-dto';

export type RestrictedUserDto = {
  id: string;
  name: string;
  email: string;
  username: string;
  profile_picture: string;
  about: AboutDto;
};
