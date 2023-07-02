export type ExperienceEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  username: string;
}>;

export type CreateExperienceEntity = Omit<ExperienceEntity, 'id'>;

export type UpdateExperienceEntity = Omit<ExperienceEntity, 'id'>;
