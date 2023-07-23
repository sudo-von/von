import {
  Username,
} from '../user/user-entity';

export type CybersecurityEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  videoUrl: string;
} & Username>;

export type CreateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;

export type UpdateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;
