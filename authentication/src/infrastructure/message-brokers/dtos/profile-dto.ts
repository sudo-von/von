import { CreateAboutDto, UpdateAboutDto } from './about-dto';

export type CreateProfileDto = {
  user_id: string;
  name: string;
  username: string;
  profile_picture: string;
  about: CreateAboutDto;
};

export type UpdateProfileDto = {
  user_id: string;
  name: string;
  username: string;
  profile_picture: string;
  about: UpdateAboutDto;
};
