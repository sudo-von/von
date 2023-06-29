import ICryptographyService from '../../../src/domain/services/cryptography-service';

export const hashMock = jest.fn();
export const comparePlainAndHashMock = jest.fn();

const CryptographyServiceMock = jest.fn().mockImplementation(() => <ICryptographyService>({
  hash: hashMock,
  comparePlainAndHash: comparePlainAndHashMock,
}));

export default CryptographyServiceMock;
