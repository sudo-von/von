export type SocialNetwork = {
  id: string;
  url: string;
  name: string;
};

export type CreateSocialNetwork = Omit<SocialNetwork, 'id' | 'order'>;

export type PartialSocialNetwork = Partial<Omit<SocialNetwork, 'id'>>;
