import {
  access,
  unlink,
  writeFile,
} from 'fs/promises';
import {
  FileServiceEntityNotFoundError,
  FileServiceFailedToDeleteError,
  FileServiceFailedToUploadError,
  FileServiceFailedToCheckIfExistsError,
} from '../file-service-errors';
import FileService from '../../../../domain/services/file-service/file-service';

class FsFileService extends FileService {
  getFilePath = (filename: string): string => `${this.directory}/${filename}`;

  fileExists = async (path: string): Promise<void> => {
    try {
      await access(path);
    } catch (e) {
      const { name, message } = e as Error;
      if (name === 'ENOENT') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToCheckIfExistsError(message);
    }
  };

  deleteFile = async (filename: string): Promise<void> => {
    try {
      const path = this.getFilePath(filename);
      await this.fileExists(path);
      await unlink(path);
    } catch (e) {
      const { message } = e as Error;
      throw FileServiceFailedToDeleteError(message);
    }
  };

  uploadFile = async (filename: string, buffer: Buffer): Promise<void> => {
    try {
      const path = this.getFilePath(filename);
      await writeFile(path, buffer, 'utf8');
    } catch (e) {
      const { message } = e as Error;
      throw FileServiceFailedToUploadError(message);
    }
  };
}

export default FsFileService;
