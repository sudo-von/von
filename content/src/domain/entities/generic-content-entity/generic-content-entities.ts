export type GenericContent<T> = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: T;
};

export type CreateGenericContent<T> = Omit<GenericContent<T>, 'id'>;

export type UpdateGenericContent<T> = Omit<GenericContent<T>, 'id'>;

export type CreateBasicGenericContent<T> = Omit<CreateGenericContent<T>, 'username'>;

export type UpdateBasicGenericContent<T> = Omit<UpdateGenericContent<T>, 'username'>;
