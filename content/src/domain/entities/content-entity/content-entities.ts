export type Content = Readonly<{
  id: string;
  type: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
}>;

export type CreateContent = Omit<Content, 'id' | 'username'>;

export type UpdateContent = Omit<Content, 'id' | 'username'>;

export type PartialContent = Partial<Content>;
