export type DetailedContent = Readonly<{
  id: string;
  type: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
}>;

export type PartialDetailedContent = Partial<DetailedContent>;

export type CreateDetailedContent = Omit<DetailedContent, 'id'>;

export type CreateContent = Omit<DetailedContent, 'id' | 'username'>;

export type UpdateContent = Omit<DetailedContent, 'id' | 'username'>;
