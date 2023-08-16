import {
  UserNotFoundError,
} from '../../../src/domain/entities/user-entity/user-errors';
import {
  DetailedUser,
  DetailedSecureUser,
} from '../../../src/domain/entities/user-entity/user-entities';
import FileServiceMock, {
  deleteFileMock,
  fileExistsMock,
  uploadFileMock,
} from '../../__mocks__/domain/services/file-service/file-service-mocks';
import SecurityServiceMock, {
  generateRandomHashMock,
} from '../../__mocks__/domain/services/security-service/security-service-mocks';
import {
  SocialNetworkNotFoundError,
  SocialNetworkCreateFailedError,
  SocialNetworkUpdateFailedError,
} from '../../../src/domain/entities/social-network-entity/social-network-errors';
import UserRepositoryMock, {
  getUserMock,
  createSocialNetworkMock,
  getSocialNetworkByIdMock,
  updateSocialNetworkByIdMock,
} from '../../__mocks__/domain/repositories/user-repository/user-repository-mocks';
import {
  SocialNetwork,
  CreateSocialNetworkFile,
  UpdateSocialNetworkFile,
} from '../../../src/domain/entities/social-network-entity/social-network-entities';
import generateFilenameMock from '../../__mocks__/domain/entities/social-network-entity/social-network-utils-mocks';
import validateSocialNetworkUpdateMock from '../../__mocks__/domain/entities/social-network-entity/social-network-validations/update-social-network-validations-mocks';
import validateSocialNetworkCreationMock from '../../__mocks__/domain/entities/social-network-entity/social-network-validations/create-social-network-validations-mocks';
import SocialNetworkUsecaseApplication from '../../../src/application/social-network-usecase/social-network-usecase';

jest.mock('../../../src/domain/entities/social-network-entity/social-network-utils', () => ({
  __esModule: true,
  default: generateFilenameMock,
}));

jest.mock('../../../src/domain/entities/social-network-entity/social-network-validations/update-social-network-file-validations', () => ({
  __esModule: true,
  default: validateSocialNetworkUpdateMock,
}));

jest.mock('../../../src/domain/entities/social-network-entity/social-network-validations/create-social-network-file-validations', () => ({
  __esModule: true,
  default: validateSocialNetworkCreationMock,
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
    const username = 'fake-username-0';

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [],
    };

    const payload: CreateSocialNetworkFile = {
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

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      socialNetworks: [expectedSocialNetwork],
    };

    describe('when social network file is invalid', () => {
      it('should throw a specific exception', async () => {
        validateSocialNetworkCreationMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
          .rejects.toThrow();
        expect(validateSocialNetworkCreationMock).toBeCalledTimes(1);
      });
    });

    describe('when social network file is valid', () => {
      describe('when user is not found', () => {
        it('should throw a specific exception', async () => {
          getUserMock.mockResolvedValueOnce(null);

          await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
            .rejects.toThrowError(UserNotFoundError);
          expect(getUserMock).toBeCalledTimes(1);
        });
      });

      describe('when user is found', () => {
        describe('when creation failed', () => {
          it('should throw a specific exception', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            createSocialNetworkMock.mockResolvedValueOnce(null);

            await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
              .rejects.toThrowError(SocialNetworkCreateFailedError);
            expect(generateRandomHashMock).toBeCalledTimes(1);
            expect(generateFilenameMock).toBeCalledTimes(1);
            expect(uploadFileMock).toBeCalledTimes(1);
            expect(createSocialNetworkMock).toBeCalledTimes(1);
          });
        });

        describe('when creation succeeded', () => {
          it('should return the expected user', async () => {
            getUserMock.mockResolvedValueOnce(storedUser);
            createSocialNetworkMock.mockResolvedValueOnce(expectedUser);

            await expect(socialNetworkUsecase.createSocialNetworkFileByUsername(username, payload))
              .resolves.toEqual(expectedUser);
          });
        });
      });
    });
  });

  describe('update social network file by id', () => {
    const id = 'fake-id-0';

    const storedSocialNetwork: SocialNetwork = {
      id: 'fake-id-0',
      src: 'fake-src-0',
      name: 'fake-name-0',
      url: 'fake-hashed-url-0',
    };

    const storedUser: DetailedUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      password: 'fake-hashed-password-0',
      socialNetworks: [storedSocialNetwork],
    };

    const expectedSocialNetwork: SocialNetwork = {
      id: 'fake-id-0',
      src: 'fake-src-1',
      name: 'fake-name-1',
      url: 'fake-hashed-url-1',
    };

    const payload: UpdateSocialNetworkFile = {
      name: 'fake-name-1',
      url: 'fake-url-1',
      size: 0,
      mimetype: '',
      buffer: Buffer.from([]),
    };

    const expectedUser: DetailedSecureUser = {
      id: 'fake-id-0',
      name: 'fake-name-0',
      email: 'fake-email-0',
      username: 'fake-username-0',
      socialNetworks: [expectedSocialNetwork],
    };

    describe('when social network file is invalid', () => {
      it('should throw a specific exception', async () => {
        validateSocialNetworkUpdateMock.mockImplementationOnce(() => { throw new Error(); });

        await expect(socialNetworkUsecase.updateSocialNetworkFileById(id, payload))
          .rejects.toThrow();
        expect(validateSocialNetworkUpdateMock).toBeCalledTimes(1);
      });
    });

    describe('when social network file is valid', () => {
      describe('when social network file is not found', () => {
        it('should throw a specific exception', async () => {
          getSocialNetworkByIdMock.mockResolvedValueOnce(null);

          await expect(socialNetworkUsecase.updateSocialNetworkFileById(id, payload))
            .rejects.toThrowError(SocialNetworkNotFoundError);
          expect(getSocialNetworkByIdMock).toBeCalledTimes(1);
        });
      });

      describe('when social network file is found', () => {
        describe('when file exists', () => {
          describe('when update failed', () => {
            it('should throw a specific exception', async () => {
              getSocialNetworkByIdMock.mockResolvedValueOnce(storedSocialNetwork);
              fileExistsMock.mockImplementationOnce(() => true);
              updateSocialNetworkByIdMock.mockImplementationOnce(() => null);

              await expect(socialNetworkUsecase.updateSocialNetworkFileById(id, payload))
                .rejects.toThrowError(SocialNetworkUpdateFailedError);
              expect(fileExistsMock).toBeCalledTimes(1);
              expect(deleteFileMock).toBeCalledTimes(1);
              expect(generateRandomHashMock).toBeCalledTimes(1);
              expect(generateFilenameMock).toBeCalledTimes(1);
              expect(uploadFileMock).toBeCalledTimes(1);
              expect(updateSocialNetworkByIdMock).toBeCalledTimes(1);
            });
          });

          describe('when update succeeded', () => {
            it('should return the expected user', async () => {
              getSocialNetworkByIdMock.mockResolvedValueOnce(storedUser);
              fileExistsMock.mockImplementationOnce(() => true);
              updateSocialNetworkByIdMock.mockResolvedValueOnce(expectedUser);

              await expect(socialNetworkUsecase.updateSocialNetworkFileById(id, payload))
                .resolves.toEqual(expectedUser);
            });
          });
        });
      });
    });
  });
});
