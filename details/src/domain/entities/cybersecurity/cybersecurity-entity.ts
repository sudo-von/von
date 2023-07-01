export type CybersecurityEntity = Readonly<{
  id: string;
  title: string;
  username: string;
  videoUrl: string;
  description: string;
}>;

export type CreateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;

export type UpdateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;
