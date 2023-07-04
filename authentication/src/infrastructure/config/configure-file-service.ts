import {
  resolve,
} from 'path';
import LoggerService from '../services/logger-service/logger-service';
import FSFileService from '../services/file-service/fs-file-service/fs-file-service';

const configureFileService = (loggerService: LoggerService) => {
  const directory = resolve('src', '..', 'public');

  const tokenService = new FSFileService(directory, loggerService);

  return tokenService;
};

export default configureFileService;
