import LoggerService from '../logger-service/logger-service';
import FSFileService from './fs-file-service/fs-file-service';

const configureFileService = (
  directory: string,
  loggerService: LoggerService,
) => {
  const tokenService = new FSFileService(directory, loggerService);

  return tokenService;
};

export default configureFileService;
