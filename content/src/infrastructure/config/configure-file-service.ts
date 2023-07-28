import {
  resolve,
} from 'path';
import FsFileService from '../services/file-service/fs-file-service/fs-file-service';

const configureFileService = () => {
  const directory = resolve('public');

  const tokenService = new FsFileService(directory);

  return tokenService;
};

export default configureFileService;
