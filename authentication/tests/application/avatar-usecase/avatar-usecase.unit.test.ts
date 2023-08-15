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
import FileServiceMock, { fileExistsMock } from '../../__mocks__/domain/services/file-service/file-service-mocks';
import SecurityServiceMock, { generateDataHashMock } from '../../__mocks__/domain/services/security-service/security-service-mocks';
import validateAvatarReplacementMock from '../../__mocks__/domain/entities/avatar-entity/avatar-validations/replace-avatar-validations-mocks';
import { ReplaceAvatarFile } from '../../../src/domain/entities/avatar-entity/avatar-entities';
import { validateFileMimetypeMock, validateFileSizeMock } from '../../__mocks__/domain/entities/avatar-entity/avatar-validations/avatar-validations-mocks';
import AvatarUsecaseApplication from '../../../src/application/avatar-usecase/avatar-usecase';
import { AvatarReplaceFailedError, InvalidAvatarFileMimeTypeError } from '../../../src/domain/entities/avatar-entity/avatar-errors';

jest.mock('../../../src/domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations', () => ({
  __esModule: true,
  default: validateAvatarReplacementMock,
}));

jest.mock('../../../src/domain/entities/avatar-entity/avatar-validations/avatar-validations', () => ({
  validateFileMimetype: validateFileMimetypeMock,
  validateFileSize: validateFileSizeMock,
}));

describe('avatar use case', () => {
  const fileServiceMock = new FileServiceMock();
  const userRepositoryMock = new UserRepositoryMock();
  const securityServiceMock = new SecurityServiceMock();

  const avatarUsecase = new AvatarUsecaseApplication(
    fileServiceMock,
    userRepositoryMock,
    securityServiceMock,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('replace avatar file by username', () => {
    const username = 'fake-username-1';

    const payload: ReplaceAvatarFile = {
      size: 0,
      mimetype: '',
      buffer: Buffer.from([]),
    };

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      avatar: 'fake-avatar-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      avatar: 'fake-hashed-avatar-0',
      socialNetworks: [],
    };

    describe('when avatar file is invalid', () => {
      it('should throw a specific exception', async () => {
        validateAvatarReplacementMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload)).rejects
          .toThrow();
        expect(validateAvatarReplacementMock).toBeCalledTimes(1);
        expect(validateAvatarReplacementMock).toBeCalledWith(payload);
      });
    });

    describe('when avatar file is valid', () => {
      describe('when user is not found', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(null);

          await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload)).rejects
            .toThrowError(UserNotFoundError);
          expect(getUserMock).toBeCalledTimes(1);
          expect(getUserMock).toBeCalledWith({ username });
        });
      });

      describe('when user is found', () => {
        describe('when mimetype is invalid', () => {
          it('should throw a specific exception', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            fileExistsMock.mockResolvedValueOnce(true);
            generateDataHashMock.mockImplementationOnce(() => expectedUser.avatar);
            validateFileMimetypeMock.mockImplementationOnce(() => false);

            await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload)).rejects
              .toThrowError(InvalidAvatarFileMimeTypeError);
          });
        });

        describe('when mimetype is valid', () => {
          describe('when update failed', () => {
            it('should throw a specific exception', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              generateDataHashMock.mockImplementationOnce(() => expectedUser.avatar);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              updateUserMock.mockResolvedValueOnce(null);

              await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload)).rejects
                .toThrowError(AvatarReplaceFailedError);
            });
          });

          describe('when update succeeded', () => {
            it('should return the expected user', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              generateDataHashMock.mockImplementationOnce(() => expectedUser.avatar);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              updateUserMock.mockResolvedValueOnce(expectedUser);

              await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload))
                .resolves.toEqual(expectedUser);
            });
          });
        });
      });
    });
  });
});
