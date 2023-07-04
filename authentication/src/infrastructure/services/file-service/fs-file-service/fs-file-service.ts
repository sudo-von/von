import {
  unlink,
  writeFile,
} from 'fs/promises';
import {
  FileServiceNoEntityError,
  FileServiceFailedFileDeletion,
  FileServiceFailedFileUploading,
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
        this.loggerService.error(FileServiceNoEntityError.message, error);
        throw FileServiceNoEntityError;
      }
      this.loggerService.error(FileServiceFailedFileDeletion.message, error);
      throw FileServiceFailedFileDeletion;
    }
  };

  upload = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = `${this.directory}/${filename}`;
      await writeFile(path, buffer, 'utf8');
    } catch (e) {
      const error = e as Error;
      if (error.name === 'ENOENT') {
        this.loggerService.error(FileServiceNoEntityError.message, error);
        throw FileServiceNoEntityError;
      }
      this.loggerService.error(FileServiceFailedFileUploading.message, error);
      throw FileServiceFailedFileUploading;
    }
  };
}

export default FSFileService;
