export type CybersecurityEntity = Readonly<{
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  username: string;
}>;

export type CreateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;

export type UpdateCybersecurityEntity = Omit<CybersecurityEntity, 'id'>;
