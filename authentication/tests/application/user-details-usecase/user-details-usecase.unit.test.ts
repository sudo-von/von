import {
  UserNotFoundError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  DetailedUser,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import {
  UserDetailsReplaceFailedError,
} from '../../../src/domain/entities/user-details-entity/user-details-errors';
import {
  ReplaceUserDetails,
} from '../../../src/domain/entities/user-details-entity/user-details-entities';
import UserRepositoryMock, {
  getUserMock,
  updateUserMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import validateUserDetailsReplacementMock from '../../__mocks__/domain/entities/user-details-entity/user-details-validations/replace-user-details-validations-mocks';
import UserDetailsUsecaseApplication from '../../../src/application/user-details-usecase/user-details-usecase';

jest.mock('../../../src/domain/entities/user-details-entity/user-details-validations/replace-user-details-validations', () => ({
  __esModule: true,
  default: validateUserDetailsReplacementMock,
}));

describe('user details use case', () => {
  const userRepositoryMock = new UserRepositoryMock();

  const userDetailsUsecase = new UserDetailsUsecaseApplication(userRepositoryMock);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('replace user details by username', () => {
    const username = 'fake-username-0';

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const payload: ReplaceUserDetails = {
      quote: 'fake-quote-1',
      interest: 'fake-interest-1',
      position: 'fake-position-1',
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      socialNetworks: [],
      details: payload,
    };

    describe('when user details are invalid', () => {
      it('should throw a specific exception', async () => {
        validateUserDetailsReplacementMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(userDetailsUsecase.replaceUserDetailsByUsername(username, payload))
          .rejects.toThrow();
        expect(validateUserDetailsReplacementMock).toBeCalledTimes(1);
      });
    });

    describe('when user details are valid', () => {
      describe('when user is not found', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(null);

          await expect(userDetailsUsecase.replaceUserDetailsByUsername(username, payload))
            .rejects.toThrowError(UserNotFoundError);
          expect(getUserMock).toBeCalledTimes(1);
        });
      });

      describe('when user is found', () => {
        describe('when update failed', () => {
          it('should throw a specific exception', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            updateUserMock.mockResolvedValueOnce(null);

            await expect(userDetailsUsecase.replaceUserDetailsByUsername(username, payload))
              .rejects.toThrowError(UserDetailsReplaceFailedError);
            expect(updateUserMock).toBeCalledTimes(1);
          });
        });

        describe('when update succeeded', () => {
          it('should return the expected user', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            updateUserMock.mockResolvedValueOnce(expectedUser);

            await expect(userDetailsUsecase.replaceUserDetailsByUsername(username, payload))
              .resolves.toEqual(expectedUser);
          });
        });
      });
    });
  });
});
