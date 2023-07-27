import {
  About,
  CreateBasicAbout,
  UpdateBasicAbout,
} from '../../entities/about-entity/about-entities';
import IUserRepository from '../../repositories/user-repository/user-repository';
import IAboutRepository from '../../repositories/about-repository/about-repository';

abstract class AboutUsecase {
  /**
  * Creates an instance of AboutUsecase.
  * @param {IUserRepository} userRepository - The user repository.
  * @param {IAboutRepository} aboutRepository - The about repository.
  */
  constructor(
    protected readonly userRepository: IUserRepository,
    protected readonly aboutRepository: IAboutRepository,
  ) {}

  abstract getAboutByUsername: (username: string)
  => Promise<About>;

  /**
  * Creates an about with the provided payload.
  * @param {CreateBasicAbout} payload - The payload for creating the about.
  * @returns {Promise<About>} A promise with the created about.
  */
  abstract createAboutByUsername: (username: string, payload: CreateBasicAbout)
  => Promise<About>;

  /**
  * Updates an about by ID with the provided payload.
  * @param {string} id - The ID of the about.
  * @param {UpdateBasicAbout} payload - The payload for updating the about.
  * @returns {Promise<About>} A promise with the updated about.
  */
  abstract updateAboutByUsername: (id: string, payload: UpdateBasicAbout)
  => Promise<About>;
}

export default AboutUsecase;
