import {
  access,
  unlink,
  constants,
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
  getFilePath = (
    filename: string,
  ): string => `${this.directory}/${filename}`;

  fileExists = async (
    path: string,
  ): Promise<boolean> => {
    try {
      await access(path, constants.F_OK);
      return true;
    } catch (e) {
      const { name, message } = e as Error;
      if (name !== 'ENOENT') {
        throw FileServiceFailedToCheckIfExistsError(message);
      }
      return false;
    }
  };

  deleteFile = async (
    filename: string,
  ): Promise<void> => {
    try {
      const path = this.getFilePath(filename);
      await unlink(path);
    } catch (e) {
      const { name, message } = e as Error;
      if (name === 'ENOENT') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToDeleteError(message);
    }
  };

  uploadFile = async (
    filename: string,
    buffer: Buffer,
  ): Promise<void> => {
    try {
      const path = this.getFilePath(filename);
      await writeFile(path, buffer, 'utf8');
    } catch (e) {
      const { name, message } = e as Error;
      if (name === 'ENOENT') {
        throw FileServiceEntityNotFoundError(message);
      }
      throw FileServiceFailedToUploadError(message);
    }
  };
}

export default FsFileService;
