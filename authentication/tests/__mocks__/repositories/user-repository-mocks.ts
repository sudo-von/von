import IUserRepository from '../../../src/domain/repositories/user-repository';

export const getUsersMock = jest.fn();
export const createUserMock = jest.fn();
export const getUserByIdMock = jest.fn();
export const getUserByEmailMock = jest.fn();
export const getUserByUsernameMock = jest.fn();
export const updateUserByUsernameMock = jest.fn();

const UserRepositoryMock = jest.fn().mockImplementation(() => <IUserRepository>({
  getUsers: getUsersMock,
  createUser: createUserMock,
  getUserById: getUserByIdMock,
  getUserByEmail: getUserByEmailMock,
  getUserByUsername: getUserByUsernameMock,
  updateUserByUsername: updateUserByUsernameMock,
}));

export default UserRepositoryMock;
