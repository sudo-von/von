import {
  Username,
} from '../user/user-entity';

export type ProfileEntity = Readonly<{
  id: string;
  quote: string;
  interest: string;
  position: string;
} & Username>;

export type CreateProfileEntity = Omit<ProfileEntity, 'id'>;

export type UpdateProfileEntity = Omit<ProfileEntity, 'id'>;
