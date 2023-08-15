import IUserRepository from '../../../../../src/domain/repositories/user-repository/user-repository';

export const getUserMock = jest.fn();
export const getUsersMock = jest.fn();
export const createUserMock = jest.fn();
export const updateUserMock = jest.fn();
export const getSocialNetworkByIdMock = jest.fn();
export const createSocialNetworkMock = jest.fn();
export const updateSocialNetworkByIdMock = jest.fn();

const UserRepositoryMock = jest.fn().mockImplementation(() => <IUserRepository>({
  getUser: getUserMock,
  getUsers: getUsersMock,
  createUser: createUserMock,
  updateUser: updateUserMock,
  getSocialNetworkById: getSocialNetworkByIdMock,
  createSocialNetwork: createSocialNetworkMock,
  updateSocialNetworkById: updateSocialNetworkByIdMock,
}));

export default UserRepositoryMock;
