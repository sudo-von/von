export type ContentRepositorySchema<T> = {
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: T;
};
