export type DetailedContentResponse = {
  id: string;
  title: string;
  subtitle: string;
  username: string;
  description: string;
  media: {
    type: 'video';
    video: {
      alt: string;
      url: string;
    }
  }
};
