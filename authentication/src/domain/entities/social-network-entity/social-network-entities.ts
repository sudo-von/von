export type SocialNetwork = {
  id: string;
  url: string;
  name: string;
  order: number;
};

export type CreateSocialNetwork = Omit<SocialNetwork, 'id'>;

export type UpdateSocialNetwork = Omit<SocialNetwork, 'id'>;

export type PartialSocialNetwork = Partial<Omit<SocialNetwork, 'id'>>;
