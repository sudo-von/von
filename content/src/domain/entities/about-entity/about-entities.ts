import {
  Content,
  CreateContent,
  CreateBasicContent,
  UpdateBasicContent,
} from '../content-entity/content-entities';

export type AboutMedia = {
  url: string;
};

export type About = Content<AboutMedia>;

export type CreateAbout = CreateContent<AboutMedia>;

export type PartialAbout = Partial<About>;

export type CreateBasicAbout = CreateBasicContent<AboutMedia>;

export type UpdateBasicAbout = UpdateBasicContent<AboutMedia>;
