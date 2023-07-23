import {
  Username,
} from '../user/user-entity';

export type ExperienceEntity = Readonly<{
  id: string;
  title: string;
  description: string;
} & Username>;

export type CreateExperienceEntity = Omit<ExperienceEntity, 'id'>;

export type UpdateExperienceEntity = Omit<ExperienceEntity, 'id'>;
