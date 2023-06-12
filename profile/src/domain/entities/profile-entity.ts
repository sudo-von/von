import { AboutEntity } from './about-entity';

export type ProfileEntity = Readonly<{
  id: string;
  name: string;
  username: string;
  profile_picture: string;
  about: AboutEntity;
}>;

export type CreateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'> & {
  userId: string;
}
>;
