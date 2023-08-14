import {
  access,
  unlink,
  constants,
  writeFile,
} from 'fs/promises';
import {
  FileServiceFailedToDeleteError,
  FileServiceFailedToUploadError,
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
    } catch {
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
      throw FileServiceFailedToDeleteError((e as Error).message);
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
      throw FileServiceFailedToUploadError((e as Error).message);
    }
  };
}

export default FsFileService;
