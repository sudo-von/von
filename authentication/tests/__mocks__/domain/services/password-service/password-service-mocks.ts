import IPasswordService from '../../../../../src/domain/services/password-service/password-service';

export const comparePasswordsMock = jest.fn();
export const hashPasswordMock = jest.fn();

const PasswordServiceMock = jest.fn().mockImplementation(() => <IPasswordService>({
  comparePasswords: comparePasswordsMock,
  hashPassword: hashPasswordMock,
}));

export default PasswordServiceMock;
