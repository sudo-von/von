import {
  resolve,
} from 'path';
import AsyncFileService from '../services/file-service/async-file-service/async-file-service';

const configureFileService = () => {
  const directory = resolve('public');

  const tokenService = new AsyncFileService(directory);

  return tokenService;
};

export default configureFileService;
