import {
  writeFile,
} from 'fs/promises';
import FileService from '../../../../domain/services/file-service';
import FileServiceUncaughtStoreError from '../file-service-errors';

class FSFileService extends FileService {
  upload = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      const encoding = 'utf8';
      await writeFile(path, buffer, encoding);
    } catch (e) {
      this.loggerService.error(FileServiceUncaughtStoreError.message, e as Error);
      throw FileServiceUncaughtStoreError;
    }
  };
}

export default FSFileService;
