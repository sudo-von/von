import {
  UserNotFoundError,
  UserUpdateFailedError,
} from '../../src/domain/errors/user-error';
import {
  InvalidCredentialsError, PermissionDeniedError,
} from '../../src/domain/errors/common-error';
import {
  UserEntity,
  UpdateUserEntity,
  RestrictedUserEntity,
} from '../../src/domain/entities/user/user-entity';
import UserRepositoryMock, {
  getUserByUsernameMock,
  updateUserByUsernameMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import CryptographyServiceMock, {
  comparePlainAndHashMock,
} from '../../__mocks__/services/cryptography-service-mock';
import {
  validateUserUpdateMock,
} from '../__mocks__/entities/user/user-validation-mocks';
import UserUsecaseApplication from '../../src/application/user-usecase-application';

jest.mock('../../src/domain/entities/user/user-validations', () => ({
  validateUserUpdate: validateUserUpdateMock,
}));

describe('authenticationUsecaseApplication', () => {
  const userRepository = new UserRepositoryMock();
  const cryptographyService = new CryptographyServiceMock();

  const userUsecase = new UserUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getUserByUsername', () => {
    const username = 'fake-username';
    describe('when user is not found', () => {
      it('should throw a specific exception', async () => {
        getUserByUsernameMock.mockResolvedValue(null);

        await expect(userUsecase.getUserByUsername(username))
          .rejects.toThrowError(UserNotFoundError);
        expect(getUserByUsernameMock).toBeCalledTimes(1);
        expect(getUserByUsernameMock).toBeCalledWith(username);
      });
    });

    describe('when user is found', () => {
      it('should return the expected user', async () => {
        const expectedUser: RestrictedUserEntity = {
          id: 'fake-id',
          name: 'fake-name',
          email: 'fake-email',
          username: 'fake-username',
          profilePicture: 'fake-profile-picture',
        };

        getUserByUsernameMock.mockResolvedValue(expectedUser);

        await expect(userUsecase.getUserByUsername(username)).resolves.toEqual(expectedUser);
      });
    });
  });

  describe('updateUserByUsername', () => {
    describe('when user does not have enough permissions', () => {
      it('should throw a specific exception', async () => {
        const requestingUsername = 'fake-username';
        const requestedUsername = 'different-fake-username';

        const validUser: UpdateUserEntity = {
          name: 'fake-name',
          email: 'fake-email',
          username: 'fake-username',
          password: 'fake-password',
          profilePicture: 'fake-profile-picture',
        };

        await expect(userUsecase.updateUserByUsername(
          requestingUsername,
          requestedUsername,
          validUser,
        )).rejects.toThrowError(PermissionDeniedError);
      });
    });

    describe('when user has enough permissions', () => {
      const requestingUsername = 'fake-username';
      const requestedUsername = 'fake-username';
      describe('when user is invalid', () => {
        it('should throw an exception', async () => {
          const invalidUser: UpdateUserEntity = {
            name: 'invalid-fake-name',
            email: 'invalid-fake-email',
            username: 'invalid-fake-username',
            password: 'invalid-fake-password',
            profilePicture: 'invalid-fake-profile-picture',
          };

          validateUserUpdateMock.mockImplementationOnce(() => { throw new Error(); });

          await expect(userUsecase.updateUserByUsername(
            requestingUsername,
            requestedUsername,
            invalidUser,
          )).rejects.toThrow();
          expect(validateUserUpdateMock).toBeCalledTimes(1);
          expect(validateUserUpdateMock).toBeCalledWith(invalidUser);
        });
      });

      describe('when user is valid', () => {
        const validUser: UpdateUserEntity = {
          name: 'valid-fake-name',
          email: 'valid-fake-email',
          username: 'valid-fake-username',
          password: 'valid-fake-password',
          profilePicture: 'valid-fake-profile-picture',
        };

        describe('when user is not found', () => {
          it('should throw a specific exception', async () => {
            getUserByUsernameMock.mockResolvedValueOnce(null);

            await expect(userUsecase.updateUserByUsername(
              requestingUsername,
              requestedUsername,
              validUser,
            )).rejects.toThrowError(UserNotFoundError);
            expect(getUserByUsernameMock).toBeCalledTimes(1);
            expect(getUserByUsernameMock).toBeCalledWith(requestedUsername);
          });
        });

        describe('when user is found', () => {
          const user: UserEntity = {
            id: 'fake-id',
            name: 'fake-name',
            email: 'fake-email',
            username: 'fake-username',
            password: 'fake-password',
            profilePicture: 'fake-profile-picture',
          };

          describe('when credentials are invalid', () => {
            it('should throw a specific exception', async () => {
              getUserByUsernameMock.mockResolvedValueOnce(user);
              comparePlainAndHashMock.mockResolvedValueOnce(false);

              await expect(userUsecase.updateUserByUsername(
                requestingUsername,
                requestedUsername,
                validUser,
              )).rejects.toThrowError(InvalidCredentialsError);
              expect(comparePlainAndHashMock).toBeCalledTimes(1);
              expect(comparePlainAndHashMock).toBeCalledWith(validUser.password, user.password);
            });
          });

          describe('when credentials are valid', () => {
            const expectedUser: RestrictedUserEntity = {
              id: 'fake-id',
              name: validUser.name,
              email: validUser.email,
              username: validUser.username,
              profilePicture: validUser.profilePicture,
            };
            describe('when user is not updated', () => {
              it('should throw a specific exception', async () => {
                getUserByUsernameMock.mockResolvedValueOnce(user);
                comparePlainAndHashMock.mockResolvedValueOnce(true);
                updateUserByUsernameMock.mockResolvedValueOnce(null);

                await expect(userUsecase.updateUserByUsername(
                  requestingUsername,
                  requestedUsername,
                  validUser,
                )).rejects.toEqual(UserUpdateFailedError);
              });
            });

            describe('when user is updated', () => {
              it('should return the expected updated user', async () => {
                getUserByUsernameMock.mockResolvedValueOnce(user);
                comparePlainAndHashMock.mockResolvedValueOnce(true);
                updateUserByUsernameMock.mockResolvedValueOnce(expectedUser);

                await expect(userUsecase.updateUserByUsername(
                  requestingUsername,
                  requestedUsername,
                  validUser,
                )).resolves.toEqual(expectedUser);
              });
            });
          });
        });
      });
    });
  });
});
