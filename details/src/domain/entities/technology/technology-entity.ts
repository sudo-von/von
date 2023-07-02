export type TechnologyEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  username: string;
}>;

export type CreateTechnologyEntity = Omit<TechnologyEntity, 'id'>;

export type UpdateTechnologyEntity = Omit<TechnologyEntity, 'id'>;
