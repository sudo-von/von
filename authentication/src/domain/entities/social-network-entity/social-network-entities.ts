export type SocialNetwork = {
  src: string;
  url: string;
  name: string;
};

export type SocialNetworkFile = {
  name: string
  size: number;
  buffer: Buffer;
  mimetype: string;
};

export type CreateSocialNetworkFile = SocialNetworkFile;

export type UpdateSocialNetworkFile = SocialNetworkFile;
