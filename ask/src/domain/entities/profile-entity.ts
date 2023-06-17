import { StatisticsEntity } from './statistics-entity';

export type ProfileEntity = Readonly<{
  id: string;
  userId: string;
  username: string;
  statistics: StatisticsEntity
}>;

export type CreateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'>
>;

export type UpdateProfileEntity = Readonly<
Omit<ProfileEntity, 'id'>
>;
