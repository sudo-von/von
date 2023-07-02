import {
  TechnologyEntity,
  CreateTechnologyEntity,
  UpdateTechnologyEntity,
} from '../entities/technology/technology-entity';
import IUserRepository from '../repositories/user-repository';
import ITechnologyRepository from '../repositories/technology-repository';

interface ITechnologyUsecaseReader {
  getTechnologyByUsername: (username: string) => Promise<TechnologyEntity>;
}

interface ITechnologyUsecaseWriter {
  createTechnology: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateTechnologyEntity
  ) => Promise<TechnologyEntity>;

  updateTechnologyByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateTechnologyEntity
  ) => Promise<TechnologyEntity>;
}

interface ITechnologyUsecase extends ITechnologyUsecaseReader, ITechnologyUsecaseWriter {}

abstract class TechnologyUsecase implements ITechnologyUsecase {
  constructor(
    protected userRepository: IUserRepository,
    protected technologyRepository: ITechnologyRepository,
  ) {}

  abstract getTechnologyByUsername: (username: string) => Promise<TechnologyEntity>;

  abstract createTechnology: (
    requestingUsername: string,
    requestedUsername: string,
    payload: CreateTechnologyEntity
  ) => Promise<TechnologyEntity>;

  abstract updateTechnologyByUsername: (
    requestingUsername: string,
    requestedUsername: string,
    payload: UpdateTechnologyEntity
  ) => Promise<TechnologyEntity>;
}

export default TechnologyUsecase;
