export type AboutEntity = Readonly<{
  id: string;
  title: string;
  username: string;
  videoUrl: string;
  description: string;
}>;

export type CreateAboutEntity = Omit<AboutEntity, 'id'>;

export type UpdateAboutEntity = Omit<AboutEntity, 'id'>;
