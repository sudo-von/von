export const getUsersMock = jest.fn();
export const createUserMock = jest.fn();
export const getUserByUsernameMock = jest.fn();
export const updateUserByUsernameMock = jest.fn();

const userRepositoryMock = jest.fn().mockImplementation(() => ({
  getUsers: getUsersMock,
  createUser: createUserMock,
  getUserByUsername: getUserByUsernameMock,
  updateUserByUsername: updateUserByUsernameMock,
}));

export default userRepositoryMock;
