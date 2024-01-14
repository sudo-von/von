export type SocialNetwork = {
  id: string;
  url: string;
  name: string;
};

export type DetailedSocialNetwork = SocialNetwork & {
  order: number;
};

export type CreateSocialNetwork = Omit<SocialNetwork, 'id'>;

export type UpdateSocialNetwork = Omit<SocialNetwork, 'id'>;

export type CreateDetailedSocialNetwork = Omit<DetailedSocialNetwork, 'id'>;

export type PartialDetailedSocialNetwork = Partial<Omit<DetailedSocialNetwork, 'id'>>;
