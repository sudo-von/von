import LoggerService from '../../infrastructure/services/logger-service/logger-service';

abstract class FileService {
  constructor(
    protected directory: string,
    protected loggerService: LoggerService,
  ) {}

  abstract store: (filename: string, buffer: Buffer) => Promise<void>;
}

export default FileService;
