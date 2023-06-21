import { CreateAboutDto, UpdateAboutDto } from './about-dto';

type ProfileDto = {
  user_id: string;
  name: string;
  username: string;
  profile_picture: string;
};

export type CreateProfileDto = Readonly<ProfileDto & {
  about: CreateAboutDto;
}>;

export type UpdateProfileDto = Readonly<ProfileDto & {
  about: UpdateAboutDto;
}>;
