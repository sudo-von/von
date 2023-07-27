import {
  Content,
  CreateContent,
  CreateBasicContent,
  UpdateBasicContent,
} from '../content-entity/content-entities';

export type CybersecurityMedia = {
  url: string;
};

export type Cybersecurity = Content<CybersecurityMedia>;

export type CreateCybersecurity = CreateContent<CybersecurityMedia>;

export type PartialCybersecurity = Partial<Cybersecurity>;

export type CreateBasicCybersecurity = CreateBasicContent<CybersecurityMedia>;

export type UpdateBasicCybersecurity = UpdateBasicContent<CybersecurityMedia>;
