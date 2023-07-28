import {
  CybersecurityRepositoryFilters,
} from './cybersecurity-repository-filters';
import {
  Cybersecurity,
  CreateCybersecurity,
  PartialCybersecurity,
} from '../../entities/cybersecurity-entity/cybersecurity-entities';

interface ICybersecurityRepositoryReader {
  getCybersecurity: (filters?: CybersecurityRepositoryFilters)
  => Promise<Cybersecurity | null>;
}

interface ICybersecurityRepositoryWriter {
  createCybersecurity: (payload: CreateCybersecurity)
  => Promise<Cybersecurity>;

  updateCybersecurity: (payload: PartialCybersecurity, filters?: CybersecurityRepositoryFilters)
  => Promise<Cybersecurity | null>;

  updateCybersecurityElements: (
    payload: PartialCybersecurity,
    filters?: CybersecurityRepositoryFilters
  ) => Promise<void>;
}

interface ICybersecurityRepository extends
  ICybersecurityRepositoryReader, ICybersecurityRepositoryWriter {}

export default ICybersecurityRepository;
