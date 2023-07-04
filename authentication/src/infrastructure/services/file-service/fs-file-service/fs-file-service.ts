import {
  unlink,
  writeFile,
} from 'fs/promises';
import {
  FileServiceENOENTError,
  FileServiceUncaughtDeleteError,
  FileServiceUncaughtStoreError,
} from '../file-service-errors';
import FileService from '../../../../domain/services/file-service';

class FSFileService extends FileService {
  delete = async (filename: string): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      await unlink(path);
    } catch (e) {
      const error = e as Error;
      if (error.name === 'ENOENT') {
        this.loggerService.error(FileServiceENOENTError.message, error);
        throw FileServiceENOENTError;
      }
      this.loggerService.error(FileServiceUncaughtDeleteError.message, error);
      throw FileServiceUncaughtDeleteError;
    }
  };

  upload = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      await writeFile(path, buffer, 'utf8');
    } catch (e) {
      const error = e as Error;
      if (error.name === 'ENOENT') {
        this.loggerService.error(FileServiceENOENTError.message, error);
        throw FileServiceENOENTError;
      }
      this.loggerService.error(FileServiceUncaughtStoreError.message, error);
      throw FileServiceUncaughtStoreError;
    }
  };
}

export default FSFileService;
