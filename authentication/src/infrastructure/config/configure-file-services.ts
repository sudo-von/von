import {
  resolve,
} from 'path';
import FsFileService from '../services/file-service/fs-file-service/fs-file-service';

const configureFileServices = () => {
  const avatarDirectory = resolve('public', 'avatars');

  const avatarFileService = new FsFileService(avatarDirectory);

  return { avatarFileService };
};

export default configureFileServices;
