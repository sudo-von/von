import {
  SingleUserOnlyError,
  InvalidCredentialsError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  CreateUser,
  DetailedUser,
  UserCredentials,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import PasswordServiceMock, {
  hashPasswordMock,
  comparePasswordsMock,
} from '../../__mocks__/domain/services/password-service/password-service-mocks';
import UserRepositoryMock, {
  getUserMock,
  getUsersMock,
  createUserMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import validateUserCreationMock from '../../__mocks__/domain/entities/user-entity/user-validations/create-user-validations-mocks';
import AuthenticationUsecaseApplication from '../../../src/application/authentication-usecase/authentication-usecase';

jest.mock('../../../src/domain/entities/user-entity/user-validations/create-user-validations', () => ({
  __esModule: true,
  default: validateUserCreationMock,
}));

describe('authentication use case', () => {
  const userRepositoryMock = new UserRepositoryMock();
  const passwordServiceMock = new PasswordServiceMock();

  const authenticationUseCase = new AuthenticationUsecaseApplication(
    userRepositoryMock,
    passwordServiceMock,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('signup', () => {
    const payload: CreateUser = {
      name: 'fake-name-1',
      email: 'fake-email-1',
      username: 'fake-username-1',
      password: 'fake-unhashed-password-1',
    };

    const storedUsers: DetailedUser[] = [{
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    }];

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-1',
      name: 'fake-id-1',
      email: 'fake-email-1',
      username: 'fake-username-1',
      socialNetworks: [],
    };

    describe('when user is invalid', () => {
      it('should throw an exception', async () => {
        validateUserCreationMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(authenticationUseCase.signup(payload)).rejects.toThrow();
        expect(validateUserCreationMock).toBeCalledTimes(1);
        expect(validateUserCreationMock).toBeCalledWith(payload);
      });
    });

    describe('when user is valid', () => {
      describe('when there is a user already registered', () => {
        it('should throw a specific exception', async () => {
          getUsersMock.mockResolvedValueOnce(storedUsers);

          await expect(authenticationUseCase.signup(payload))
            .rejects.toThrowError(SingleUserOnlyError);
          expect(getUsersMock).toBeCalledTimes(1);
        });
      });

      describe('when there is no user registered', () => {
        it('should return the expected created user', async () => {
          getUsersMock.mockResolvedValueOnce([]);
          hashPasswordMock.mockResolvedValueOnce(payload.password);
          createUserMock.mockResolvedValueOnce(expectedUser);

          await expect(authenticationUseCase.signup(payload))
            .resolves.toEqual(expectedUser);
          expect(hashPasswordMock).toBeCalledTimes(1);
          expect(hashPasswordMock).toBeCalledWith(payload.password);
          expect(createUserMock).toBeCalledTimes(1);
        });
      });
    });
  });

  describe('login', () => {
    const payload: UserCredentials = {
      email: 'fake-email-1',
      password: 'fake-password-1',
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
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      socialNetworks: [],
    };

    describe('when user is not found', () => {
      it('should throw a specific exception', async () => {
        getUserMock.mockResolvedValueOnce(null);

        await expect(authenticationUseCase.login(payload)).rejects
          .toThrowError(InvalidCredentialsError);
        expect(getUserMock).toBeCalledTimes(1);
        expect(getUserMock).toBeCalledWith({ email: payload.email });
      });
    });

    describe('when user is found', () => {
      describe('when credentials are invalid', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(storedUser);

          comparePasswordsMock.mockResolvedValueOnce(false);

          await expect(authenticationUseCase.login(payload)).rejects
            .toThrowError(InvalidCredentialsError);
          expect(comparePasswordsMock).toBeCalledTimes(1);
          expect(comparePasswordsMock).toBeCalledWith(payload.password, storedUser.password);
        });
      });

      describe('when credentials are valid', () => {
        it('should return the expected user', async () => {
          getUserMock.mockResolvedValueOnce(storedUser);
          comparePasswordsMock.mockResolvedValueOnce(true);

          await expect(authenticationUseCase.login(payload))
            .resolves.toEqual(expectedUser);
        });
      });
    });
  });
});
