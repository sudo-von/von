export type ContentResponse = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: {
    type: 'empty-media';
  } | { type: 'video', url: string }
};
