export const getFilePathMock = jest.fn();
export const fileExistsMock = jest.fn();
export const deleteFileMock = jest.fn();
export const uploadFileMock = jest.fn();

const FileServiceMock = jest.fn().mockImplementation(() => ({
  getFilePath: getFilePathMock,
  fileExists: fileExistsMock,
  deleteFile: deleteFileMock,
  uploadFile: uploadFileMock,
}));

export default FileServiceMock;
