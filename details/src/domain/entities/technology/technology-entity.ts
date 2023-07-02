import {
  Username,
} from '../user/user-entity';

export type TechnologyEntity = Readonly<{
  id: string;
  title: string;
  description: string;
} & Username>;

export type CreateTechnologyEntity = Omit<TechnologyEntity, 'id'>;

export type UpdateTechnologyEntity = Omit<TechnologyEntity, 'id'>;
