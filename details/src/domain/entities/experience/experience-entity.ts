export type ExperienceEntity = Readonly<{
  id: string;
  title: string;
  username: string;
  description: string;
}>;

export type CreateExperienceEntity = Omit<ExperienceEntity, 'id'>;

export type UpdateExperienceEntity = Omit<ExperienceEntity, 'id'>;
