import IUserRepository from '../../../src/domain/repositories/user-repository';

export const getUsersMock = jest.fn();
export const createUserMock = jest.fn();
export const getUserByUserIdMock = jest.fn();
export const getUserByUsernameMock = jest.fn();
export const updateUserByUsernameMock = jest.fn();

const userRepositoryMock = jest.fn().mockImplementation(() => <IUserRepository>({
  getUsers: getUsersMock,
  createUser: createUserMock,
  getUserByUserId: getUserByUserIdMock,
  getUserByUsername: getUserByUsernameMock,
  updateUserByUsername: updateUserByUsernameMock,
}));

export default userRepositoryMock;
