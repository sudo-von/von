export const getProfilesMock = jest.fn();
export const createProfileMock = jest.fn();
export const getProfileByUsernameMock = jest.fn();
export const updateProfileByUsernameMock = jest.fn();

const profileRepositoryMock = jest.fn().mockImplementation(() => ({
  getProfiles: getProfilesMock,
  createProfile: createProfileMock,
  getProfileByUsername: getProfileByUsernameMock,
  updateProfileByUsername: updateProfileByUsernameMock,
}));

export default profileRepositoryMock;
