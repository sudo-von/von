export type GenericContentRepositorySchema<T> = {
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: T;
};
