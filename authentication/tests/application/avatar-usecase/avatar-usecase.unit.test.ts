import {
  UserNotFoundError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  DetailedUser,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import {
  AvatarReplaceFailedError,
} from '../../../src/domain/entities/avatar-entity/avatar-errors';
import {
  ReplaceAvatarFile,
} from '../../../src/domain/entities/avatar-entity/avatar-entities';
import FileServiceMock, {
  deleteFileMock,
  fileExistsMock,
  uploadFileMock,
} from '../../__mocks__/domain/services/file-service/file-service-mocks';
import SecurityServiceMock, {
  generateDataHashMock,
} from '../../__mocks__/domain/services/security-service/security-service-mocks';
import UserRepositoryMock, {
  getUserMock,
  updateUserMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import generateFilenameMock from '../../__mocks__/domain/entities/avatar-entity/avatar-utils-mocks';
import validateAvatarReplacementMock from '../../__mocks__/domain/entities/avatar-entity/avatar-validations/replace-avatar-validations-mocks';
import AvatarUsecaseApplication from '../../../src/application/avatar-usecase/avatar-usecase';

jest.mock('../../../src/domain/entities/avatar-entity/avatar-utils', () => ({
  __esModule: true,
  default: generateFilenameMock,
}));

jest.mock('../../../src/domain/entities/avatar-entity/avatar-validations/replace-avatar-file-validations', () => ({
  __esModule: true,
  default: validateAvatarReplacementMock,
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
    const username = 'fake-username-0';

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      avatar: 'fake-avatar-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const payload: ReplaceAvatarFile = {
      size: 0,
      mimetype: '',
      buffer: Buffer.from([]),
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

        await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload))
          .rejects.toThrow();
        expect(validateAvatarReplacementMock).toBeCalledTimes(1);
      });
    });

    describe('when avatar file is valid', () => {
      describe('when user is not found', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(null);

          await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload))
            .rejects.toThrowError(UserNotFoundError);
          expect(getUserMock).toBeCalledTimes(1);
        });
      });

      describe('when user is found', () => {
        describe('when avatar exists', () => {
          describe('when update failed', () => {
            it('should throw a specific exception', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              fileExistsMock.mockResolvedValueOnce(true);
              updateUserMock.mockResolvedValueOnce(null);

              await expect(avatarUsecase.replaceAvatarFileByUsername(username, payload))
                .rejects.toThrowError(AvatarReplaceFailedError);

              expect(fileExistsMock).toBeCalledTimes(1);
              expect(deleteFileMock).toBeCalledTimes(1);
              expect(generateDataHashMock).toBeCalledTimes(1);
              expect(generateFilenameMock).toBeCalledTimes(1);
              expect(uploadFileMock).toBeCalledTimes(1);
              expect(updateUserMock).toBeCalledTimes(1);
            });
          });

          describe('when update succeeded', () => {
            it('should return the expected user', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              fileExistsMock.mockResolvedValueOnce(true);
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
