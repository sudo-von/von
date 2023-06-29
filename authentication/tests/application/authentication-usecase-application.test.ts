import {
  SingleUserOnlyError,
} from '../../src/domain/errors/user-error';
import {
  InvalidCredentialsError,
} from '../../src/domain/errors/common-error';
import {
  UserEntity,
  CreateUserEntity,
  RestrictedUserEntity,
} from '../../src/domain/entities/user/user-entity';
import UserRepositoryMock, {
  getUsersMock,
  createUserMock,
  getUserByEmailMock,
} from '../__mocks__/repositories/user-repository-mocks';
import CryptographyServiceMock, {
  comparePlainAndHashMock, hashMock,
} from '../__mocks__/services/cryptography-service-mock';
import {
  validateUserSignupMock,
  validateUserUpdateMock,
} from '../__mocks__/entities/user/user-validation-mocks';
import AuthenticationUsecaseApplication from '../../src/application/authentication-usecase-application';

jest.mock('../../src/domain/entities/user/user-validations', () => ({
  validateUserSignup: validateUserSignupMock,
  validateUserUpdate: validateUserUpdateMock,
}));

describe('authenticationUsecaseApplication', () => {
  const userRepository = new UserRepositoryMock();
  const cryptographyService = new CryptographyServiceMock();

  const authenticationUseCase = new AuthenticationUsecaseApplication(
    userRepository,
    cryptographyService,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('authenticate', () => {
    const email = 'fake-email';
    const password = 'fake-password';

    describe('when user is not found', () => {
      it('should throw a specific exception', async () => {
        getUserByEmailMock.mockResolvedValue(null);

        await expect(authenticationUseCase.authenticate(email, password))
          .rejects.toThrowError(InvalidCredentialsError);
        expect(getUserByEmailMock).toBeCalledTimes(1);
        expect(getUserByEmailMock).toBeCalledWith(email);
      });
    });

    describe('when user is found', () => {
      const user: UserEntity = {
        id: 'fake-id',
        name: 'fake-name',
        email: 'fake-email',
        username: 'fake-username',
        password: 'fake-hashed-password',
        profilePicture: 'fake-profile-picture',
      };

      describe('when credentials are invalid', () => {
        it('should throw a specific exception', async () => {
          getUserByEmailMock.mockResolvedValue(user);
          comparePlainAndHashMock.mockResolvedValue(false);

          await expect(authenticationUseCase.authenticate(email, password))
            .rejects.toThrowError(InvalidCredentialsError);
          expect(comparePlainAndHashMock).toBeCalledTimes(1);
          expect(comparePlainAndHashMock).toBeCalledWith(password, user.password);
        });
      });

      describe('when credentials are valid', () => {
        it('should return the expected user', async () => {
          const expectedUser: RestrictedUserEntity = {
            id: 'fake-id',
            name: user.name,
            email: user.email,
            username: user.username,
            profilePicture: user.profilePicture,
          };

          getUserByEmailMock.mockResolvedValue(user);
          comparePlainAndHashMock.mockResolvedValue(true);

          await expect(authenticationUseCase.authenticate(email, password))
            .resolves.toEqual(expectedUser);
        });
      });
    });
  });

  describe('signup', () => {
    describe('when user is invalid', () => {
      it('should throw an exception', async () => {
        const invalidUser: CreateUserEntity = {
          name: 'invalid-fake-name',
          email: 'invalid-fake-email',
          username: 'invalid-fake-username',
          password: 'invalid-fake-password',
          profilePicture: 'invalid-fake-profile-picture',
        };

        validateUserSignupMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(authenticationUseCase.signup(invalidUser))
          .rejects.toThrow();
        expect(validateUserSignupMock).toBeCalledTimes(1);
        expect(validateUserSignupMock).toBeCalledWith(invalidUser);
      });
    });

    describe('when user is valid', () => {
      const validUser: CreateUserEntity = {
        name: 'valid-fake-name',
        email: 'valid-fake-email',
        username: 'valid-fake-username',
        password: 'valid-fake-password',
        profilePicture: 'valid-fake-profile-picture',
      };

      describe('when there is a user registered', () => {
        it('should throw a specific exception', async () => {
          const registeredUsers: UserEntity[] = [{
            id: 'fake-id',
            ...validUser,
          }];

          getUsersMock.mockResolvedValueOnce(registeredUsers);

          await expect(authenticationUseCase.signup(validUser))
            .rejects.toThrowError(SingleUserOnlyError);
          expect(getUsersMock).toBeCalledTimes(1);
        });
      });

      describe('when there is no user registered', () => {
        it('should return the expected created user', async () => {
          const expectedUser: RestrictedUserEntity = {
            id: 'fake-id',
            name: validUser.name,
            email: validUser.email,
            username: validUser.username,
            profilePicture: validUser.profilePicture,
          };

          getUsersMock.mockResolvedValueOnce([]);
          hashMock.mockResolvedValueOnce(validUser.password);
          createUserMock.mockResolvedValueOnce(expectedUser);

          await expect(authenticationUseCase.signup(validUser))
            .resolves.toEqual(expectedUser);
          expect(createUserMock).toBeCalledTimes(1);
          expect(createUserMock).toBeCalledWith(validUser);
        });
      });
    });
  });
});
