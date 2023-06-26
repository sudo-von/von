import {
  it,
  expect,
  describe,
} from '@jest/globals';
import UserMongoRepository from '../__mocks__/user-repository-mock';
import { ProfileEntity } from '../../domain/entities/profile-entity';
import ProfileUsecaseApplication from '../../application/profile-usecase-application';
import ProfileMongoRepository, { getProfileByUsernameMock } from '../__mocks__/profile-repository-mock';
import { ProfileNotFoundError } from '../../domain/errors/profile-error';

jest.mock('../../infrastructure/repositories/user-repository/mongo-repository/user-mongo-repository');
jest.mock('../../infrastructure/repositories/profile-repository/mongo-repository/profile-mongo-repository');

describe('profileUsecase', () => {
  const userRepository = new UserMongoRepository();
  const profileRepository = new ProfileMongoRepository();
  const profileUsecase = new ProfileUsecaseApplication(userRepository, profileRepository);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getProfileByUsername', () => {
    describe('when profile exists', () => {
      it('should return the expected profile entity by username', async () => {
        const username = 'existing_username';
        const expectedProfileEntity: ProfileEntity = {
          id: '6498ee4d6b08e6c8a4071337',
          quote: 'This is a fake quote.',
          interest: 'This is a fake interest.',
          position: 'This is a fake position.',
          username,
        };

        getProfileByUsernameMock.mockResolvedValueOnce(expectedProfileEntity);

        const result = await profileUsecase.getProfileByUsername(username);

        expect(result).toEqual(expectedProfileEntity);
        expect(getProfileByUsernameMock).toHaveBeenCalledTimes(1);
        expect(getProfileByUsernameMock).toHaveBeenCalledWith(username);
      });
    });

    describe('when profile does not exist', () => {
      it('should throw an error with an appropriate message', async () => {
        const username = 'non_existing_username';

        getProfileByUsernameMock.mockResolvedValueOnce(null);

        await expect(profileUsecase.getProfileByUsername(username))
          .rejects.toThrowError(ProfileNotFoundError);
      });
    });
  });
});
