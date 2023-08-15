import {
  UserNotFoundError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  DetailedUser,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import FileServiceMock, {
  fileExistsMock,
} from '../../__mocks__/domain/services/file-service/file-service-mocks';
import SecurityServiceMock, {
  generateDataHashMock,
} from '../../__mocks__/domain/services/security-service/security-service-mocks';
import {
  SocialNetworkNotFoundError,
  SocialNetworkCreateFailedError,
  SocialNetworkUpdateFailedError,
  InvalidSocialNetworkFileMimeTypeError,
} from '../../../src/domain/entities/social-network-entity/social-network-errors';
import UserRepositoryMock, {
  getUserMock,
  createSocialNetworkMock,
  getSocialNetworkByIdMock,
  updateSocialNetworkByIdMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import {
  CreateSocialNetworkFile,
  SocialNetwork,
  UpdateSocialNetworkFile,
} from '../../../src/domain/entities/social-network-entity/social-network-entities';
import {
  validateFileSizeMock,
  validateFileMimetypeMock,
} from '../../__mocks__/domain/entities/social-network-entity/social-network-validations/social-network-validations-mocks';
import validateSocialNetworkUpdateMock from '../../__mocks__/domain/entities/social-network-entity/social-network-validations/update-social-network-validations-mocks';
import validateSocialNetworkCreationMock from '../../__mocks__/domain/entities/social-network-entity/social-network-validations/create-social-network-validations-mocks';

import SocialNetworkUsecaseApplication from '../../../src/application/social-network-usecase/social-network-usecase';

jest.mock('../../../src/domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations', () => ({
  __esModule: true,
  default: validateSocialNetworkUpdateMock,
}));

jest.mock('../../../src/domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations', () => ({
  __esModule: true,
  default: validateSocialNetworkCreationMock,
}));

jest.mock('../../../src/domain/entities/social-network-entity/social-network-validations/social-network-validations', () => ({
  validateFileMimetype: validateFileMimetypeMock,
  validateFileSize: validateFileSizeMock,
}));

describe('social network use case', () => {
  const fileServiceMock = new FileServiceMock();
  const userRepositoryMock = new UserRepositoryMock();
  const securityServiceMock = new SecurityServiceMock();

  const socialNetworkUsecase = new SocialNetworkUsecaseApplication(
    fileServiceMock,
    userRepositoryMock,
    securityServiceMock,
  );

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('create social network file by username', () => {
    const username = 'fake-username-1';

    const payload: CreateSocialNetworkFile = {
      name: 'fake-name-0',
      url: 'fake-url-0',
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

    const expectedSocialNetwork: SocialNetwork = {
      id: 'fake-id-0',
      src: 'fake-src-0',
      name: 'fake-name-0',
      url: 'fake-hashed-url-0',
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      avatar: 'fake-hashed-avatar-0',
      socialNetworks: [expectedSocialNetwork],
    };

    describe('when social network file is invalid', () => {
      it('should throw a specific exception', async () => {
        validateSocialNetworkCreationMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
          .rejects.toThrow();
        expect(validateSocialNetworkCreationMock).toBeCalledTimes(1);
        expect(validateSocialNetworkCreationMock).toBeCalledWith(payload);
      });
    });

    describe('when social network file is valid', () => {
      describe('when user is not found', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(null);

          await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
            .rejects.toThrowError(UserNotFoundError);
          expect(getUserMock).toBeCalledTimes(1);
          expect(getUserMock).toBeCalledWith({ username });
        });
      });

      describe('when user is found', () => {
        describe('when mimetype is invalid', () => {
          it('should throw a specific exception', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            fileExistsMock.mockResolvedValueOnce(true);
            generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
            validateFileMimetypeMock.mockImplementationOnce(() => false);

            await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
              .rejects.toThrowError(InvalidSocialNetworkFileMimeTypeError);
          });
        });

        describe('when mimetype is valid', () => {
          describe('when creation failed', () => {
            it('should throw a specific exception', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              createSocialNetworkMock.mockResolvedValueOnce(null);

              await expect(
                socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload),
              ).rejects.toThrowError(SocialNetworkCreateFailedError);
            });
          });

          describe('when creation succeeded', () => {
            it('should return the expected user', async () => {
              getUserMock.mockResolvedValueOnce(storedUser);
              generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              createSocialNetworkMock.mockResolvedValueOnce(expectedUser);

              await expect(
                socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload),
              ).resolves.toEqual(expectedUser);
            });
          });
        });
      });
    });
  });

  describe('update social network file by id', () => {
    const socialNetworkId = 'fake-id-0';

    const payload: UpdateSocialNetworkFile = {
      name: 'fake-name-0',
      url: 'fake-url-0',
      size: 0,
      mimetype: '',
      buffer: Buffer.from([]),
    };

    const expectedSocialNetwork: SocialNetwork = {
      id: 'fake-id-0',
      src: 'fake-src-0',
      name: 'fake-name-0',
      url: 'fake-hashed-url-0',
    };

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      avatar: 'fake-avatar-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [expectedSocialNetwork],
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      avatar: 'fake-hashed-avatar-0',
      socialNetworks: [expectedSocialNetwork],
    };

    describe('when social network file is invalid', () => {
      it('should throw a specific exception', async () => {
        validateSocialNetworkUpdateMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(socialNetworkUsecase.updateSocialNetworkFileById(socialNetworkId, payload))
          .rejects.toThrow();
        expect(validateSocialNetworkUpdateMock).toBeCalledTimes(1);
        expect(validateSocialNetworkUpdateMock).toBeCalledWith(payload);
      });
    });

    describe('when social network file is valid', () => {
      describe('when social network file is not found', () => {
        it('should throw a specific exception', async () => {
          getSocialNetworkByIdMock.mockResolvedValueOnce(null);

          await expect(socialNetworkUsecase.updateSocialNetworkFileById(socialNetworkId, payload))
            .rejects.toThrowError(SocialNetworkNotFoundError);
          expect(getSocialNetworkByIdMock).toBeCalledTimes(1);
          expect(getSocialNetworkByIdMock).toBeCalledWith(socialNetworkId);
        });
      });

      describe('when social network file is found', () => {
        describe('when mimetype is invalid', () => {
          it('should throw a specific exception', async () => {
            getSocialNetworkByIdMock.mockResolvedValueOnce(expectedSocialNetwork);
            fileExistsMock.mockResolvedValueOnce(true);
            generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
            validateFileMimetypeMock.mockImplementationOnce(() => false);

            await expect(socialNetworkUsecase.updateSocialNetworkFileById(socialNetworkId, payload))
              .rejects.toThrowError(InvalidSocialNetworkFileMimeTypeError);
          });
        });

        describe('when mimetype is valid', () => {
          describe('when update failed', () => {
            it('should throw a specific exception', async () => {
              getSocialNetworkByIdMock.mockResolvedValueOnce(expectedSocialNetwork);
              generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              updateSocialNetworkByIdMock.mockResolvedValueOnce(null);

              await expect(
                socialNetworkUsecase.updateSocialNetworkFileById(socialNetworkId, payload),
              ).rejects.toThrowError(SocialNetworkUpdateFailedError);
            });
          });

          describe('when update succeeded', () => {
            it('should return the expected user', async () => {
              getSocialNetworkByIdMock.mockResolvedValueOnce(storedUser);
              generateDataHashMock.mockImplementationOnce(() => expectedSocialNetwork.src);
              validateFileMimetypeMock.mockImplementationOnce(() => true);
              updateSocialNetworkByIdMock.mockResolvedValueOnce(expectedUser);

              await expect(
                socialNetworkUsecase.updateSocialNetworkFileById(socialNetworkId, payload),
              ).resolves.toEqual(expectedUser);
            });
          });
        });
      });
    });
  });
});
