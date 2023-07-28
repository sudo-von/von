import {
  PartialCybersecurity,
} from '../../entities/cybersecurity-entity/cybersecurity-entities';

export type CybersecurityRepositoryFilters = Pick<PartialCybersecurity, 'id' | 'username'>;
