import {
  it,
  expect,
  describe,
} from '@jest/globals';
import UserMongoRepository, { getUserByUsernameMock } from '../__mocks__/user-repository-mock';
import { CreateProfileEntity, ProfileEntity } from '../../domain/entities/profile-entity';
import ProfileUsecaseApplication from '../../application/profile-usecase-application';
import ProfileMongoRepository, { createProfileMock, getProfileByUsernameMock, getProfilesMock } from '../__mocks__/profile-repository-mock';
import { ProfileNotFoundError } from '../../domain/errors/profile-error';
import { UserEntity } from '../../domain/entities/user-entity';
import { PermissionDeniedError } from '../../domain/errors/common-error';

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
      it('should return the expected profile by username', async () => {
        const username = 'existing_user';
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
        const username = 'non_existing_user';

        getProfileByUsernameMock.mockResolvedValueOnce(null);

        await expect(profileUsecase.getProfileByUsername(username))
          .rejects.toThrowError(ProfileNotFoundError);
      });
    });
  });

  describe('createProfileByUsername', () => {
    describe('when user has enough permissions', () => {
      it('should return the expected created profile', async () => {
        const requestingUsername = 'fake_user';
        const requestedUsername = 'fake_user';

        const payload: CreateProfileEntity = {
          quote: 'This is a fake quote.',
          interest: 'This is a fake interest.',
          position: 'This is a fake position.',
          username: requestedUsername,
        };

        const userEntity: UserEntity = {
          id: '6498f976138edb6e28f62523',
          userId: '6498ee4d6b08e6c8a4071337',
          username: requestedUsername,
        };

        const expectedResult: ProfileEntity = {
          id: '6498f9d771e9dc0af713b31d',
          ...payload,
        };

        getUserByUsernameMock.mockResolvedValueOnce(userEntity);

        getProfilesMock.mockResolvedValueOnce([]);

        createProfileMock.mockResolvedValueOnce(expectedResult);

        const result = await profileUsecase.createProfile(
          requestingUsername,
          requestedUsername,
          payload,
        );

        expect(result).toEqual(expectedResult);

        expect(getUserByUsernameMock).toHaveBeenCalledTimes(1);
        expect(getProfilesMock).toHaveBeenCalledTimes(1);
        expect(createProfileMock).toHaveBeenCalledTimes(1);
        expect(getUserByUsernameMock).toHaveBeenCalledWith(requestedUsername);
      });
    });

    describe('when user does not have enough permissions', () => {
      it('should throw an error with an appropriate message', async () => {
        const requestingUsername = 'fake_user_1';
        const requestedUsername = 'fake_user_2';

        const payload: CreateProfileEntity = {
          quote: 'This is a fake quote.',
          interest: 'This is a fake interest.',
          position: 'This is a fake position.',
          username: requestedUsername,
        };

        getProfileByUsernameMock.mockResolvedValueOnce(null);

        await expect(
          profileUsecase.createProfile(requestingUsername, requestedUsername, payload),
        ).rejects.toThrowError(PermissionDeniedError);
      });
    });
  });
});
