import {
  resolve,
} from 'path';
import LoggerService from '../services/logger-service/logger-service';
import AsyncFileService from '../services/file-service/async-file-service/async-file-service';

const configureFileService = (loggerService: LoggerService) => {
  const directory = resolve('src', '..', 'public');

  const tokenService = new AsyncFileService(directory, loggerService);

  return tokenService;
};

export default configureFileService;
