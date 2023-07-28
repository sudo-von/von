import {
  Cybersecurity,
  CreateBasicCybersecurity,
  UpdateBasicCybersecurity,
} from '../../entities/cybersecurity-entity/cybersecurity-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import ICybersecurityRepository from '../../repositories/cybersecurity-repository/cybersecurity-repository';

abstract class CybersecurityUsecase {
  /**
  * Creates an instance of CybersecurityUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {ICybersecurityRepository} cybersecurityRepository - The cybersecurity repository.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly cybersecurityRepository: ICybersecurityRepository,
  ) {}

  abstract getCybersecurityByUsername: (username: string)
  => Promise<Cybersecurity>;

  /**
  * Creates an cybersecurity with the provided payload.
  * @param {CreateBasicCybersecurity} payload - The payload for creating the cybersecurity.
  * @returns {Promise<Cybersecurity>} A promise with the created cybersecurity.
  */
  abstract createCybersecurityByUsername: (username: string, payload: CreateBasicCybersecurity)
  => Promise<Cybersecurity>;

  /**
  * Updates an cybersecurity by ID with the provided payload.
  * @param {string} id - The ID of the cybersecurity.
  * @param {UpdateBasicCybersecurity} payload - The payload for updating the cybersecurity.
  * @returns {Promise<Cybersecurity>} A promise with the updated cybersecurity.
  */
  abstract updateCybersecurityByUsername: (id: string, payload: UpdateBasicCybersecurity)
  => Promise<Cybersecurity>;
}

export default CybersecurityUsecase;
