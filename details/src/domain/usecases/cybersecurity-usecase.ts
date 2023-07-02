import {
  CybersecurityEntity,
  CreateCybersecurityEntity,
  UpdateCybersecurityEntity,
} from '../entities/cybersecurity/cybersecurity-entity';
import IUserRepository from '../repositories/user-repository';
import ICybersecurityRepository from '../repositories/cybersecurity-repository';

interface ICybersecurityUsecaseReader {
  getCybersecurityByUsername: (username: string) => Promise<CybersecurityEntity>;
}

interface ICybersecurityUsecaseWriter {
  createCybersecurity: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateCybersecurityEntity
  ) => Promise<CybersecurityEntity>;

  updateCybersecurityByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateCybersecurityEntity
  ) => Promise<CybersecurityEntity>;
}

interface ICybersecurityUsecase extends ICybersecurityUsecaseReader, ICybersecurityUsecaseWriter {}

abstract class CybersecurityUsecase implements ICybersecurityUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected cybersecurityRepository: ICybersecurityRepository,
  ) {}

  abstract getCybersecurityByUsername: (username: string) => Promise<CybersecurityEntity>;

  abstract createCybersecurity: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateCybersecurityEntity
  ) => Promise<CybersecurityEntity>;

  abstract updateCybersecurityByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateCybersecurityEntity
  ) => Promise<CybersecurityEntity>;
}

export default CybersecurityUsecase;
