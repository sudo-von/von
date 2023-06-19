import { AboutDto } from './about-dto';

export type CreateProfileEntityDto = {
  name: string;
  user_id: string;
  username: string;
  profile_picture: string;
  about: AboutDto;
};
