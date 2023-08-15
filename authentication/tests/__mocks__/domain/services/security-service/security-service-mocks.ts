import ISecurityService from '../../../../../src/domain/services/security-service/security-service';

export const generateRandomHashMock = jest.fn();
export const generateDataHashMock = jest.fn();

const SecurityServiceMock = jest.fn().mockImplementation(() => <ISecurityService>({
  generateRandomHash: generateRandomHashMock,
  generateDataHash: generateDataHashMock,
}));

export default SecurityServiceMock;
