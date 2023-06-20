import { CreateAboutDto } from './about-dto';

export type CreateProfileDto = {
  user_id: string;
  name: string;
  username: string;
  profile_picture: string;
  about: CreateAboutDto;
};
