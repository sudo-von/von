export type Content<T> = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: T;
};

export type CreateContent<T> = Omit<Content<T>, 'id'>;

export type UpdateContent<T> = Omit<Content<T>, 'id'>;

export type CreateBasicContent<T> = Omit<CreateContent<T>, 'username'>;

export type UpdateBasicContent<T> = Omit<UpdateContent<T>, 'username'>;
