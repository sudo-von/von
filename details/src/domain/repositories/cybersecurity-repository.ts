import {
  CybersecurityEntity,
  CreateCybersecurityEntity,
  UpdateCybersecurityEntity,
} from '../entities/cybersecurity/cybersecurity-entity';

export interface ICybersecurityRepositoryReader {
  getCybersecurity: () => Promise<CybersecurityEntity[]>;
  getCybersecurityByUsername: (username: string) => Promise<CybersecurityEntity | null>;
}

interface ICybersecurityRepositoryWriter {
  createCybersecurity: (
    payload: CreateCybersecurityEntity
  ) => Promise<CybersecurityEntity>;

  updateCybersecurityByUsername: (
    username: string,
    payload: UpdateCybersecurityEntity
  ) => Promise<CybersecurityEntity | null>;
}

interface ICybersecurityRepository extends
  ICybersecurityRepositoryReader, ICybersecurityRepositoryWriter {}

export default ICybersecurityRepository;
