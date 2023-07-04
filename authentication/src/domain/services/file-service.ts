import LoggerService from '../../infrastructure/services/logger-service/logger-service';

abstract class FileService {
  constructor(
    protected directory: string,
    protected loggerService: LoggerService,
  ) {}

  abstract delete: (filename: string) => Promise<void>;

  abstract upload: (filename: string, buffer: Buffer) => Promise<void>;
}

export default FileService;
