export type SocialNetwork = {
  id: string;
  src: string;
  url: string;
  name: string;
};

export type SocialNetworkFile = Pick<SocialNetwork, 'name' | 'url'> & {
  size: number;
  buffer: Buffer;
  mimetype: string;
};

export type CreateSocialNetworkFile = SocialNetworkFile;

export type UpdateSocialNetworkFile = SocialNetworkFile;

export type CreateSocialNetwork = Omit<SocialNetwork, 'id'>;

export type PartialSocialNetwork = Partial<Omit<SocialNetwork, 'id'>>;
