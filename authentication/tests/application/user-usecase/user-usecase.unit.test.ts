import {
  UserNotFoundError,
  InvalidCredentialsError,
  UserUpdateFailedError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  UpdateUser,
  DetailedUser,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import PasswordServiceMock, {
  comparePasswordsMock,
} from '../../__mocks__/domain/services/password-service/password-service-mocks';
import UserRepositoryMock, {
  getUserMock,
  updateUserMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import validateUserUpdateMock from '../../__mocks__/domain/entities/user-entity/user-validations/update-user-validations-mocks';
import UserUsecaseApplication from '../../../src/application/user-usecase/user-usecase';

jest.mock('../../../src/domain/entities/user-entity/user-validations/update-user-validations', () => ({
  __esModule: true,
  default: validateUserUpdateMock,
}));

describe('user use case', () => {
  const userRepositoryMock = new UserRepositoryMock();
  const passwordServiceMock = new PasswordServiceMock();

  const userUsecase = new UserUsecaseApplication(
    userRepositoryMock,
    passwordServiceMock,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('get user by username', () => {
    const username = 'fake-username-0';

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      socialNetworks: [],
    };

    describe('when user is not found', () => {
      it('should throw a specific exception', async () => {
        getUserMock.mockResolvedValueOnce(null);

        await expect(userUsecase.getUserByUsername(username))
          .rejects.toThrowError(UserNotFoundError);
        expect(getUserMock).toBeCalledTimes(1);
        expect(getUserMock).toBeCalledWith({ username });
      });
    });

    describe('when user is found', () => {
      it('should return the expected user', async () => {
        getUserMock.mockResolvedValueOnce(storedUser);

        await expect(userUsecase.getUserByUsername(username))
          .resolves.toEqual(expectedUser);
        expect(getUserMock).toBeCalledTimes(1);
      });
    });
  });

  describe('update user by username', () => {
    const username = 'fake-username-1';

    const payload: UpdateUser = {
      name: 'fake-name-1',
      email: 'fake-email-1',
      username: 'fake-username-1',
      password: 'fake-unhashed-password-0',
    };

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-1',
      email: 'fake-email-1',
      username: 'fake-username-1',
      socialNetworks: [],
    };

    describe('when user is not found', () => {
      it('should throw a specific exception', async () => {
        getUserMock.mockResolvedValueOnce(null);

        await expect(userUsecase.updateUserByUsername(username, payload)).rejects
          .toThrowError(UserNotFoundError);
        expect(getUserMock).toBeCalledTimes(1);
        expect(getUserMock).toBeCalledWith({ username });
      });
    });

    describe('when user is found', () => {
      describe('when credentials are invalid', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(storedUser);
          comparePasswordsMock.mockResolvedValueOnce(false);

          await expect(userUsecase.updateUserByUsername(username, payload)).rejects
            .toThrowError(InvalidCredentialsError);
          expect(comparePasswordsMock).toBeCalledTimes(1);
          expect(comparePasswordsMock).toBeCalledWith(payload.password, storedUser.password);
        });
      });

      describe('when credentials are valid', () => {
        describe('when update failed', () => {
          it('should throw a specific exception', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            comparePasswordsMock.mockResolvedValueOnce(true);
            updateUserMock.mockResolvedValueOnce(null);

            await expect(userUsecase.updateUserByUsername(username, payload)).rejects
              .toThrowError(UserUpdateFailedError);
          });
        });

        describe('when update succeeded', () => {
          it('should return the expected user', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            comparePasswordsMock.mockResolvedValueOnce(true);
            updateUserMock.mockResolvedValueOnce(expectedUser);

            await expect(userUsecase.updateUserByUsername(username, payload))
              .resolves.toEqual(expectedUser);
          });
        });
      });
    });
  });
});
